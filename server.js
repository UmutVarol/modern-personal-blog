require('dotenv').config(); //
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const DB_PATH = path.join(__dirname, 'posts.json');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// =========================================
// 1. SUNUCU TEST ENDPOINT'İ
// =========================================
app.get('/api/test', (req, res) => {
    res.status(200).json({ status: "Başarılı", message: "Node.js sunucusu sorunsuz çalışıyor!" });
});

// =========================================
// 2. VERİTABANI YARDIMCILARI
// =========================================
async function initDB() {
    try {
        await fs.access(DB_PATH);
    } catch {
        const initialData = [
            { 
                id: "1", 
                title: "İlk Yazım: Merhaba Dünya", 
                category: "AGENDA", 
                content: "Bu benim blogumdaki ilk yazım. Burada yazılım, blockchain ve teknoloji üzerine düşüncelerimi paylaşacağım.",
                link: "" 
            }
        ];
        await fs.writeFile(DB_PATH, JSON.stringify(initialData, null, 2));
    }
}

// =========================================
// 3. BLOG YAZILARI API ENDPOINT'LERİ
// =========================================
app.get('/api/posts', async (req, res) => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: "Veriler okunamadı." });
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const { password, title, category, content, link } = req.body;
        
        if (password !== "Umut123") {
            return res.status(403).json({ error: "Yanlış Şifre! Yetkisiz giriş denemesi." });
        }

        const data = await fs.readFile(DB_PATH, 'utf8');
        const posts = JSON.parse(data);
        
        const newPost = {
            id: Date.now().toString(),
            title,
            category,
            content: content || "",
            link: link || ""
        };
        
        posts.push(newPost);
        await fs.writeFile(DB_PATH, JSON.stringify(posts, null, 2));
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: "Yazı kaydedilemedi." });
    }
});

// =========================================
// 4. İLETİŞİM FORMU MAİL API (Hata Detaylandırması Eklendi)
// =========================================
app.post('/api/contact', async (req, res) => {
    console.log("\n--- YENİ MAİL İSTEĞİ GELDİ ---");
    console.log("Gelen Veri:", req.body);
    
    const { name, email, subject, message } = req.body;
    
    if(!name || !email || !message) {
        console.log("HATA: Eksik veri gönderildi.");
        return res.status(400).json({ success: false, message: 'Lütfen tüm zorunlu alanları doldurun.' });
    }

    // GMAIL SMTP AYARLARI (EN STABİL VERSİYON)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // SSL kullanımı
        auth: {
            user: 'umutvarol7676@gmail.com'
            pass: process.env.GMAIL_PASS 
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: '"MUV Blog İletişim" <umutvarol7676@gmail.com>', 
        replyTo: email, 
        to: 'umutvarol7676@gmail.com',
        subject: `[Websitenizden Mesaj] ${subject || 'Konu Belirtilmemiş'}`,
        text: `Sitenizin iletişim formundan yeni bir mesajınız var.\n\nKimden: ${name}\nE-posta: ${email}\n\nMesaj Detayı:\n${message}`
    };

    try {
        console.log("Mail Google sunucularına iletiliyor, lütfen bekleyin...");
        const info = await transporter.sendMail(mailOptions);
        console.log("BAŞARILI: Mail gönderildi! Google Yanıtı:", info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error("KRİTİK HATA: Mail gönderilemedi!");
        console.error(error.message); // Hatanın tam nedenini terminalde görebilmek için
        // Frontend'e hatanın tam nedenini gönderiyoruz
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send email.', 
            errorDetails: error.message 
        });
    }
});

const PORT = 3000;
app.listen(PORT, async () => {
    await initDB();
    console.log(`\n==============================================`);
    console.log(`🚀 SUNUCU AKTİF VE ÇALIŞIYOR`);
    console.log(`🌐 Adres: http://localhost:${PORT}`);
    console.log(`==============================================\n`);
});