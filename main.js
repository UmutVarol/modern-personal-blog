// =========================================
// 0. PREMIUM ARTICLE DATABASE 
// =========================================
const articlesDatabase = {
    // ---- ANA SAYFA (INDEX) YAZILARI ----
    "web3_ecoinometrics": {
        title: "Blockchain: The Ecoinometrics Perspective",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>Analyzing the blockchain space through a quantitative macro lens reveals that Bitcoin and Ethereum are no longer isolated speculative assets; they have firmly established themselves within the broader global liquidity ecosystem. Ecoinometrics data consistently shows a high beta correlation between the M2 money supply and digital asset valuations.</p>
            <h3>Quantitative Scarcity</h3>
            <p>While traditional fiat currencies are subjected to arbitrary debasement, programmable scarcity alters the investment thesis entirely. The programmatic halving of issuance, combined with permanent loss of private keys, creates an absolute supply cap that traditional commodities like gold cannot replicate. When central banks pivot to monetary expansion, these networks act as high-velocity liquidity sponges.</p>
        `
    },
    "global_macro_2026": {
        title: "Global Market Trends 2026: Macro Shift",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>As we navigate through 2026, the macroeconomic landscape is dominated by the consequences of the "higher for longer" interest rate regime and unprecedented sovereign debt levels. The transition towards multipolar trade networks and the heavy accumulation of hard assets by central banks signal a paradigm shift away from traditional unipolar currency dominance.</p>
            <h3>The Capital Expenditure Boom</h3>
            <p>Simultaneously, the explosive capital expenditure in AI infrastructure and clean energy transition is creating a massive divergence in equity markets. We are witnessing structural inflation in raw commodities alongside profound deflation in cognitive services, reshaping how institutional capital constructs resilient portfolios.</p>
        `
    },
    "compounding_quality": {
        title: "Compounding Quality: The Ultimate Moat",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>In an era of rapid technological disruption and elevated capital costs, speculative growth investing has given way to a renewed focus on compounding quality. Businesses that possess absolute pricing power, fortress-like balance sheets, and consistently high Return on Invested Capital (ROIC) are the only entities mathematically capable of outperforming inflation over a decade-long horizon.</p>
            <h3>Identifying True Moats</h3>
            <p>A true economic moat is not just a brand name; it is high switching costs, network effects, and proprietary technology that prevents margin erosion. When identifying compounding quality, free cash flow generation is the ultimate metric, distinguishing enduring enterprises from temporary market benefactors.</p>
        `
    },
    // ---- WEB3 & BLOCKCHAIN YAZILARI ----
    "web3_quantum_transition": {
        title: "Is Blockchain Just a Transition Technology?",
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>The entire premise of blockchain technology, including cryptocurrencies, non-fungible tokens (NFTs), and decentralized smart contracts, rests upon a foundational assumption: distributed ledgers are immensely secure and cannot be breached using modern classical computers. However, as quantitative analysts and thought leaders like Joachim Klement, CFA, have extensively explored, this impregnable security paradigm may face an existential and catastrophic threat from the rapid advancement of quantum computing. The question arises: Is the trillion-dollar Web3 ecosystem merely a transition technology destined to be obsolete?</p>
            
            <h3>The Cryptographic Foundation: 256 Bits of Unbreakable Math</h3>
            <p>Modern blockchains, including the robust networks of Bitcoin and Ethereum, rely almost exclusively on advanced cryptographic hashing algorithms—most notably SHA-256 (Secure Hash Algorithm 256-bit) and the Elliptic Curve Digital Signature Algorithm (ECDSA). To truly comprehend the scale of this security, one must consider the mathematics. A standard 256-bit private key has exactly 2<sup>256</sup> possible combinations. That number is roughly comparable to the estimated number of atoms in the entire observable universe. If every computer currently existing on Earth were pooled together into a single global supercomputer to "guess" or brute-force this key, it would take billions of years—far exceeding the remaining lifespan of our solar system. This mathematical certainty is what allows billions of dollars to be settled trustlessly across borders.</p>
            
            <p>Furthermore, the consensus mechanisms (whether Proof-of-Work or Proof-of-Stake) ensure that tampering with historical records requires capturing over 51% of the network's global computational or capital power, an attack vector that is economically unviable and practically impossible for classical actors.</p>

            <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Cryptography Graph" style="width:100%; border-radius:12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <h3>The Quantum Threat: Shor's and Grover's Algorithms</h3>
            <p>The threat model changes entirely when we step out of classical physics and into quantum mechanics. Quantum computers do not operate on binary bits (which exist strictly as 0s or 1s). Instead, they operate on qubits, which can exist in multiple states simultaneously due to the phenomena of superposition and quantum entanglement. This is not just a faster computer; it is an entirely different mode of calculation.</p>
            
            <p>When applied to cryptography, specifically using <strong>Shor's Algorithm</strong>, a sufficiently powerful quantum computer with enough fault-tolerant logical qubits could theoretically factor large prime numbers and solve the discrete logarithm problem exponentially faster than any classical supercomputer. This directly breaks ECDSA, meaning a quantum actor could derive your private key simply by knowing your public wallet address. Additionally, <strong>Grover's Algorithm</strong> poses a massive threat by halving the effective security of symmetric cryptography and hashing functions. Once the problem-solving capacity of standard computers is outpaced by quantum counterparts (an event often referred to as "Q-Day"), all legacy blockchains will instantly become hackable by anyone controlling a quantum machine.</p>
            
            <h3>The Timeline: When Will "Q-Day" Arrive?</h3>
            <p>Sensationalist media and certain academic studies have occasionally suggested that quantum advantage could break standard encryption as early as 2024 or 2025. While these specific timelines have proven overly aggressive and largely inaccurate due to the immense difficulty of stabilizing qubits (quantum decoherence), the consensus among elite cryptography experts and physicists is definitively shifting. The threat is no longer categorized as "science fiction"; it has transitioned into a matter of engineering scale and capital deployment. Major tech conglomerates (IBM, Google, IBM) and heavily funded nation-states are currently pouring billions of dollars into quantum research to reach the holy grail: fault-tolerant logical qubits.</p>

            <blockquote>"Unless all blockchain applications have been fundamentally redesigned ahead of time, they will likely be rendered unsafe and useless by the quantum revolution." – Joachim Klement, CFA</blockquote>
            
            <h3>The Path Forward: Post-Quantum Cryptography (PQC)</h3>
            <p>So, is blockchain doomed to be a mere transition technology? The definitive answer is: Not necessarily. The blockchain industry is fundamentally built on open-source adaptability. The National Institute of Standards and Technology (NIST) in the United States has already finalized and begun standardizing Post-Quantum Cryptographic (PQC) algorithms. These new standards, specifically lattice-based cryptography methods like CRYSTALS-Kyber (for key encapsulation) and CRYSTALS-Dilithium (for digital signatures), rely on mathematical problems that even quantum computers cannot solve efficiently.</p>
            
            <p>To survive, major blockchains will inevitably need to undergo massive, globally coordinated hard forks to integrate these new cryptographic standards at the protocol layer. The transition will be rocky, testing the decentralized governance structures of Web3 networks. The window for this migration is closing rapidly. Networks that fail to achieve consensus on PQC upgrades will be highly vulnerable to bad actors hoarding encrypted data today under the "harvest now, decrypt later" methodology. Ultimately, the transition to quantum resistance will serve as the ultimate stress test for the social layers governing Web3, dictating which networks survive the next decade.</p>
        `
    },
    "web3_rwa": {
        title: "Real World Assets (RWAs): The Trillion Dollar On-Chain Migration",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>The tokenization of Real World Assets (RWAs) is no longer a theoretical concept discussed merely in whitepapers; it is actively unfolding as the most significant liquidity migration event in the history of decentralized finance (DeFi). By bringing traditional financial instruments—such as U.S. Treasuries, commercial real estate, corporate credit, fine art, and commodities—onto the blockchain, RWAs are constructing a definitive bridge between the multi-trillion dollar Traditional Finance (TradFi) sector and the high-efficiency, 24/7/365 settlement layer of Web3.</p>
            
            <h3>Tokenized Treasuries Leading the Charge</h3>
            <p>In the current macroeconomic environment, characterized by a "higher for longer" interest rate regime initiated by central banks globally, the baseline "risk-free" yield offered by short-term U.S. Treasuries has become highly attractive to crypto-native capital. Previously, stablecoins holding billions of dollars yielded 0% to the end user while the issuing companies captured the Treasury yields. Now, protocols are tokenizing these yields directly. Entities like MakerDAO (through its Spark protocol integrations) and stablecoin titans like Circle and Tether are heavily backing their digital assets with sovereign debt.</p>
            
            <p>Furthermore, massive institutional players have entirely shifted their stance. BlackRock’s introduction of the BUIDL fund (BlackRock USD Institutional Digital Liquidity Fund) on the Ethereum network is a prime example. This fund tokenizes liquidity, natively generating yield on-chain for institutional investors. This architectural shift completely removes the friction, counterparty risk, and capital lockups associated with traditional T+2 (trade date plus two days) settlement times, replacing it with instant, atomic, and cryptographically verifiable transfers that settle in milliseconds.</p>
            
            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Finance Chart" style="width:100%; border-radius:12px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <h3>Legal Frameworks and Special Purpose Vehicles (SPVs)</h3>
            <p>The true magic of RWAs isn't just found in the Solidity smart contract code; it's deeply embedded in the legal wrapping. For an on-chain digital token to accurately and legally represent ownership of an off-chain physical asset, there must be an ironclad, legally binding mechanism connecting the two. This is generally achieved using highly structured, bankruptcy-remote Special Purpose Vehicles (SPVs) usually formed under corporate-friendly jurisdictions like Delaware or the British Virgin Islands.</p>
            
            <p>These SPV entities hold the physical asset in trust, while the digital token acts as a legally recognized bearer instrument or a direct share of that trust. Bridging the jurisdictional gap between strict corporate law, SEC regulations, and EVM bytecode is the true innovation of modern RWA protocols like Centrifuge and Ondo Finance. The ERC-3643 standard (T-REX) has emerged specifically to handle these permissioned, compliant tokens, enforcing KYC/AML checks automatically at the smart contract layer before any transfer can occur.</p>

            <h3>The Oracle Problem and Chainlink's CCIP</h3>
            <p>For an off-chain asset to have meaning on-chain, its price, ownership status, and legal validity must be constantly updated. A blockchain by design cannot fetch external data; it is a closed deterministic system. This reliance brings us to Decentralized Oracle Networks (DONs). Chainlink has rapidly positioned itself as the foundational underlying infrastructure for global RWA tokenization through its Cross-Chain Interoperability Protocol (CCIP) and Proof of Reserve (PoR) feeds.</p>
            
            <p>CCIP enables secure, highly encrypted message passing not just between different isolated blockchains, but also between blockchains and legacy banking communication systems like SWIFT. This creates a unified, global translation layer for tokenized assets to flow freely across the internet of value. Proof of Reserve ensures that the tokens minted on-chain are genuinely backed 1:1 by the assets sitting in the off-chain bank account, verifiable by anyone in real-time.</p>

            <h3>The Future: Fractionalized Real Estate and Private Credit</h3>
            <p>Beyond government bonds, the RWA narrative is aggressively expanding into private credit markets and global real estate. Illiquid markets traditionally require massive capital upfront and are heavily gated by accredited investor laws, shutting out 99% of the global population. By creating fractionalized ERC-20 or ERC-721 tokens that represent legal ownership of a multi-million dollar commercial building or a pool of emerging-market corporate loans, retail investors globally can gain exposure to yield-generating assets with as little as $100.</p>
            
            <p>While the primary hurdle remains regulatory clarity across disparate global jurisdictions, the technological architecture is fully mature, audited, and ready for deployment. The migration of the world's financial assets to public ledgers is no longer a question of "if", but "when".</p>
        `
    },
    "web3_ethereum": {
        title: "The Ethereum Ecosystem: Ultrasound Money & Future Upgrades",
        image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>Ethereum has successfully navigated what is widely considered the most complex software upgrade in human history: The Merge. By transitioning its entire global consensus mechanism from energy-intensive Proof-of-Work (PoW) to the highly efficient Proof-of-Stake (PoS) while the network was live, Ethereum reduced its energy consumption by an astonishing 99.9%. However, the roadmap is far from complete. Vitalik Buterin's vision for Ethereum involves a multi-year, multi-stage architectural evolution designed to permanently cement it as the foundational settlement layer of the global digital economy.</p>
            
            <h3>The Surge, The Scourge, and The Verge</h3>
            <p>Ethereum's technical roadmap is categorized into several parallel tracks, each solving a specific trilemma problem. The <strong>Surge</strong> focuses entirely on scaling the network's throughput to 100,000+ Transactions Per Second (TPS) via Layer 2 Rollups and Data Availability sampling. The recent Dencun upgrade (EIP-4844) introduced "blob space", a new transaction type that dramatically reduced data posting costs for Layer 2 networks, plunging L2 fees to fractions of a cent.</p>
            
            <p>The <strong>Scourge</strong> aims to tackle the centralization risks associated with MEV (Maximal Extractable Value). Currently, block builders can extract value by front-running user transactions. Ethereum plans to mitigate this by implementing Proposer-Builder Separation (PBS) directly into the protocol, democratizing MEV rewards and censoring malicious sandwich attacks. Finally, the <strong>Verge</strong> will introduce Verkle Trees, a massive cryptographic upgrade that will fundamentally alter how state data is stored on Ethereum. This will allow for "stateless clients," meaning everyday users can run a fully verifying Ethereum node on a mobile phone with almost zero hard drive space required.</p>

            <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Ethereum Future" style="width:100%; border-radius:12px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <h3>EIP-1559 and The "Ultrasound Money" Thesis</h3>
            <p>Prior to the implementation of EIP-1559, miners received all transaction fees, leading to unpredictable gas spikes, bad user experience, and unlimited inflation of the ETH supply. The EIP-1559 upgrade completely changed Ethereum's monetary policy. Now, the base fee required to process a transaction is mathematically determined by network congestion and is perpetually "burned" (destroyed) from the total supply.</p>
            
            <p>Coupled with the massive drop in daily token issuance that occurred post-Merge (since validators require far less ETH to operate than miners needed to pay for electricity), Ethereum has frequently experienced periods of net deflation. When network activity is high, more ETH is burned than created. This dynamic has earned ETH the moniker "Ultrasound Money," contrasting it with Bitcoin's capped but strictly inflationary (until 2140) issuance schedule. If network activity on L2s and L1 remains consistently high, the total circulating supply of ETH will continue to shrink, creating a powerful economic sink that heavily benefits long-term holders.</p>
            
            <h3>The Staking Economy and Liquid Staking Derivatives (LSDs)</h3>
            <p>With the shift to Proof-of-Stake, staking has become the native, protocol-level risk-free rate of the Ethereum economy. However, locking up 32 ETH (roughly $100,000 USD depending on market conditions) to run a validator creates massive capital inefficiency for users who want to participate in DeFi. Liquid Staking Derivatives (LSDs) like Lido's stETH or RocketPool's rETH were invented to solve this exact problem.</p>
            
            <p>When you deposit ETH into these protocols, they stake it on your behalf and give you a tradable, liquid receipt token (e.g., stETH) representing your staked position plus the accrued yield. This has unlocked tens of billions of dollars in liquidity, allowing users to earn the ~3-4% native staking yield while simultaneously deploying their stETH as premium collateral in lending protocols like Aave or Maker. Furthermore, the advent of "Restaking" via EigenLayer allows users to take this same staked ETH and use it to secure other secondary networks (like Oracles or Data Availability layers), earning multiple layers of yield on the exact same base asset. Ethereum is rapidly evolving into a highly complex, layered financial machine.</p>
        `
    },
    "web3_sui": {
        title: "Sui Network: Redefining Through Object-Centric Architecture",
        image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>While the EVM (Ethereum Virtual Machine) and its account-based model have dominated the smart contract landscape for nearly a decade, newer Layer 1 networks are fundamentally rethinking how state is managed on a distributed ledger from the ground up. Originating from the ashes of Facebook's highly ambitious but ultimately abandoned Diem project, the Sui Network (built by Mysten Labs) introduces a groundbreaking paradigm to the blockchain space: the Object-Centric Architecture.</p>
            
            <h3>Objects, Not Accounts: A Paradigm Shift</h3>
            <p>In traditional account-based blockchains like Ethereum, the global state is essentially a massive ledger. Your balance is simply a number stored in a mapping linked to your cryptographic address. If you want to send an NFT, the network must update the entire global state to reflect that the address holding the NFT has changed. In Sui, the architecture is fundamentally different: every single digital asset (whether it's a fungible token, a complex NFT, or a smart contract itself) is a distinct, standalone "Object."</p>
            
            <p>These objects have unique cryptographic IDs and specific ownership metadata attached directly to them. An object can be owned by a specific address, shared among multiple addresses, or set as completely immutable. Because objects are distinct and separated in the database, transactions that do not affect the same objects do not need to wait in line for each other. They can be processed entirely in parallel.</p>
            
            <h3>Parallel Execution and Unprecedented TPS</h3>
            <p>This object-centric data model provides Sui with a massive computational advantage. Standard blockchains like Bitcoin and Ethereum process transactions sequentially (one by one in a single-threaded environment) to avoid state conflicts and double-spending. Sui's engine recognizes that User A sending Token X to User B has absolutely nothing to do with User C sending NFT Y to User D. They do not touch the same state.</p>
            
            <p>By bypassing the heavy global consensus mechanism for simple, independent transfers (utilizing a mechanism called Byzantine Consistent Broadcast), Sui can achieve hundreds of thousands of Transactions Per Second (TPS) using multi-core processing on validator nodes. This results in near-instant finality and sub-cent transaction fees, making the network uniquely positioned for high-frequency, high-throughput applications like fully on-chain gaming, decentralized social media, and centralized-exchange-level limit order books (CLOBs).</p>
            
            <h3>The Move Programming Language and PTBs</h3>
            <p>Sui utilizes a highly customized variant of the Move programming language, originally designed by Meta engineers. Move is designed with security and asset protection as first-class citizens. Unlike Solidity, where reentrancy attacks and logic bugs have resulted in the draining of billions of dollars, Move's resource-oriented design treats digital assets like physical objects in the real world. A token cannot be implicitly copied, accidentally duplicated, or silently discarded; it must be explicitly passed between functions. This drastically reduces the attack vectors available to hackers.</p>
            
            <p>Furthermore, Sui introduces a revolutionary concept known as Programmable Transaction Blocks (PTBs). In standard EVM networks, a user must sign a separate transaction for every action (e.g., Approve Token -> Swap Token -> Stake Token), paying gas fees and waiting for block confirmations each time. With PTBs on Sui, a developer can chain up to 1,024 distinct operations into a single atomic execution. The user signs exactly once, and either the entire complex chain of events succeeds instantly, or the whole thing reverts safely. This provides an unparalleled User Experience (UX) that finally mirrors the frictionless feel of Web2 applications.</p>
        `
    },
    "web3_rollups": {
        title: "The Rollup Supremacy: Optimistic vs ZK Architectures",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>The Blockchain Trilemma states that a network can only optimize for two of three properties: Decentralization, Security, and Scalability. Layer 1 blockchains like Ethereum have firmly chosen to optimize for Decentralization and Security, inherently limiting their base-layer scalability. They simply cannot process the world's financial transactions directly on-chain without pricing out everyday users. The definitive solution to this problem is moving computation off-chain while keeping the ironclad security guarantees on-chain. This paradigm shift has ushered in the era of the Rollup.</p>
            
            <h3>Optimistic Rollups: The "Assume Innocence" Model</h3>
            <p>Currently, Layer 2 networks utilizing Optimistic architecture—primarily Arbitrum (Nitro) and Optimism (Bedrock)—dominate the Total Value Locked (TVL) landscape of scaling solutions. They operate on an elegant but simple premise: "optimistically" assuming that all transactions batched and submitted by the L2 sequencer back to the Ethereum main chain are entirely valid and honest.</p>
            
            <p>However, to prevent malicious sequencers from stealing funds, Optimistic Rollups incorporate a crucial security mechanism known as the "Challenge Period" (typically lasting 7 days). During this time window, any network observer can run the computation themselves. If they detect a fraudulent or mathematically incorrect transaction submitted by the sequencer, they can submit a "Fraud Proof" to the L1 smart contract. An interactive proving game ensues, and if the fraud is verified, the transaction is reverted, and the malicious sequencer's staked ETH is aggressively slashed. While this makes Optimistic Rollups highly EVM compatible and relatively easy to code, it creates a massive UX flaw: users must wait a full week to bridge their funds natively back to Layer 1.</p>

            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="ZK Graph" style="width:100%; border-radius:12px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <h3>Zero-Knowledge (ZK) Rollups: Mathematical Certainty</h3>
            <p>Zero-Knowledge Rollups (such as zkSync Era, Starknet, Scroll, and Polygon zkEVM) take a fundamentally different, math-heavy approach. Instead of assuming innocence and relying on game theory to catch bad actors, ZK Rollups prove absolute correctness upfront using incredibly complex cryptography (primarily SNARKs or STARKs).</p>
            
            <p>In a ZK architecture, the sequencer computes thousands of transactions off-chain and generates a tiny, highly compressed mathematical "Validity Proof". This proof guarantees that the state transition was executed flawlessly according to the rules of the EVM. This proof is then submitted to an Ethereum smart contract, which can verify its correctness in milliseconds. Because the math cannot be faked, there is no need for a 7-day challenge period. Withdrawals to L1 are processed with instant finality. While ZK-EVMs are notoriously difficult to build due to the immense complexity of generating cryptographic proofs for arbitrary, Turing-complete smart contract code, they are widely considered the "endgame" and the holy grail of blockchain scaling.</p>
            
            <h3>Hardware Acceleration and Proving Costs</h3>
            <p>The primary bottleneck for ZK Rollups today is the immense computational power required to generate these proofs. Running a massive Prover node requires massive RAM and CPU overhead. Consequently, the industry is experiencing a massive shift towards hardware acceleration. Companies are utilizing high-end GPUs, FPGAs (Field Programmable Gate Arrays), and eventually custom ASICs specifically designed to execute polynomial commitments and elliptic curve cryptography at lightning speed.</p>
            
            <p>As this hardware matures and proving algorithms become more optimized, the cost to generate a ZK proof will asymptotically approach zero. Once this happens, ZK Rollups will completely eclipse their Optimistic counterparts in both speed, volume, and capital efficiency, creating a hyper-scalable web3 ecosystem that retains the exact security profile of the Ethereum base layer.</p>
        `
    },
    "web3_l1_l2": {
        title: "Modular Blockchains: Deconstructing the Trilemma",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>For the first decade of cryptocurrency's existence, blockchains were built exclusively as monolithic structures. A single network—whether it was Bitcoin, early Ethereum, or Solana—was responsible for handling every single aspect of the blockchain's operation simultaneously. These core functions include Execution (running the smart contracts), Consensus (agreeing on the order of transactions), Settlement (finalizing the state), and Data Availability (ensuring the transaction history is publicly accessible).</p>
            
            <p>Forcing a single network of decentralized nodes to handle all four of these massive computational tasks creates severe bottlenecks. This architectural flaw is the root cause of the infamous Blockchain Trilemma: the theory that you can only optimize for two of the three core properties (Scalability, Security, or Decentralization) at any given time.</p>
            
            <h3>The Modular Thesis: Specialization over Generalization</h3>
            <p>The new, defining paradigm of Web3 architecture is the Modular Blockchain. The thesis is simple but revolutionary: by decoupling these four monolithic functions into distinct, highly specialized layers, the ecosystem can achieve maximum performance without sacrificing security or decentralization. Imagine a factory assembly line replacing a single artisan trying to build an entire car by themselves.</p>
            
            <p>In a modular stack, a Layer 2 Rollup (like Arbitrum or Optimism) handles pure <strong>Execution</strong>. Unburdened by the need to secure a global consensus network, these L2s can process thousands of complex DeFi trades and NFT mints per second. Once processed, the L2 compresses the transaction data and pushes it down to the Ethereum Layer 1. Ethereum, with its hundreds of thousands of globally distributed validators, acts purely as the unhackable <strong>Settlement and Consensus</strong> layer.</p>
            
            <h3>Data Availability (DA): The Final Bottleneck</h3>
            <p>Even with L2 execution, storing vast amounts of raw transaction data permanently on the Ethereum mainnet is incredibly expensive. Every byte costs gas. Enter highly specialized Data Availability (DA) networks like Celestia, EigenDA, and Avail. These networks do absolutely no execution; they do not compute smart contracts. Their sole mathematical purpose is to guarantee that transaction data published by L2s is available for anyone to download and verify.</p>
            
            <p>Celestia achieves this through a breakthrough technology called Data Availability Sampling (DAS) combined with erasure coding. Light nodes can randomly sample tiny pieces of a block and mathematically prove that the entire block is available, without downloading the whole thing. By plugging a Layer 2 Rollup into Celestia for DA instead of using Ethereum, the cost to post data drops by up to 99%. This radical cost reduction paves the way for "Rollups-as-a-Service" (RaaS) and ultra-cheap Layer 3 "AppChains"—custom blockchains spun up instantly and tailored for specific, high-bandwidth use cases like multiplayer gaming or enterprise supply chain tracking.</p>
        `
    },
    // ---- SMART CONTRACTS ----
    "solidity_patterns": {
        title: "Smart Contracts: Advanced Solidity Patterns",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: `
            <p>Writing smart contracts requires a mindset entirely different from traditional web or backend development. In the Web2 world, if a critical logic bug is deployed to a server, developers can push a hotfix silently in minutes. In Web3, smart contracts are immutable by default, and they frequently hold hundreds of millions of dollars in highly liquid assets. A single overlooked line of code can result in an instant, unrecoverable exploit. Therefore, developers must code with an adversarial mindset, assuming every external interaction is a potential attack vector.</p>
            
            <h3>Checks-Effects-Interactions (CEI)</h3>
            <p>The Reentrancy attack remains one of the most devastating and frequently exploited threat vectors in Decentralized Finance (DeFi), famously causing the $50M DAO hack that resulted in the Ethereum Classic hard fork. The CEI pattern is an absolute necessity and your first line of defense. When writing a function, you must always strictly order your operations: </p>
            <ul>
                <li><strong>1. Checks:</strong> First, validate all conditions using <code>require</code> statements (e.g., Does the user have enough balance? Is the caller authorized?).</li>
                <li><strong>2. Interactions:</strong> Finally, and strictly last, make external calls to untrusted addresses (e.g., sending the actual ETH or ERC20 tokens).</li>
            </ul>
        `
    },
    "gas_optimization": {
        title: "EVM Gas Optimization Techniques",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: `<p>In the Ethereum Virtual Machine (EVM), compute power and database storage are fiercely expensive commodities. Mastering EVM gas mechanics separates junior coders from elite Web3 architects.</p>`
    },
    "proxy_contracts": {
        title: "EIP-1967 Proxy Implementations",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        content: `<p>The foundational characteristic of smart contracts is immutability; once deployed to the blockchain, the code cannot be altered. Proxy patterns enable upgradability without migrating state or liquidity.</p>`
    },

    // ---- ECONOMY & FINANCE ----
    "eco_post_1": {
        title: "Global Liquidity Cycles & Digital Asset Correlation",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=100",
        content: `
            <p>To accurately understand the explosive growth and violent drawdowns of modern asset classes, investors must look beyond traditional fundamental analysis—such as Price-to-Earnings ratios or discounted cash flows—and focus entirely on the plumbing of the global financial system: Global Liquidity. In the post-2008 era, characterized by quantitative easing and zero interest rate policies, the primary driver of equity, real estate, and crypto valuations is the expansion and contraction of central bank balance sheets.</p>
            
            <h3>M2 Money Supply as the Ultimate Indicator</h3>
            <p>Historical data from the last 15 years indicates an overwhelmingly strong, almost undeniable correlation between the global M2 money supply (the total amount of currency in circulation plus highly liquid bank deposits) and the price action of high-beta risk assets like Bitcoin, Ethereum, and the Nasdaq 100 tech stocks.</p>
            
            <p>When the US Federal Reserve, the European Central Bank (ECB), and the People's Bank of China (PBOC) aggressively inject liquidity into the system via quantitative easing or repo market interventions, the pace of fiat currency debasement accelerates. Institutional capital, acutely aware that holding cash guarantees a loss in purchasing power, immediately flows down the risk curve. It seeks refuge in computationally scarce assets and high-growth equities. Bitcoin, therefore, does not trade primarily as a tech stock or a payment network; it trades as a highly sensitive, globally accessible gauge of fiat liquidity and central bank policy errors.</p>

            <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Finance Chart" style="width:100%; border-radius:12px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <h3>The Multipolar Currency Shift and De-Dollarization</h3>
            <p>Looking ahead towards 2026 and beyond, we are witnessing the gradual but steady de-dollarization of global macro trade. Driven by geopolitical fracturing and the weaponization of the SWIFT network, BRICS+ nations (Brazil, Russia, India, China, South Africa, and new members) are aggressively accumulating physical gold at record paces unseen since the Cold War. They are establishing bilateral trade agreements settled in local currencies rather than the US Dollar.</p>
            
            <p>As the hegemony of the Petrodollar faces its first legitimate structural test in 50 years, the macroeconomic environment heavily favors hard assets, industrial commodities, and sovereign-grade decentralized digital assets that exist outside the control of any single nation-state.</p>
            
            <h3>The Death of the 60/40 Portfolio</h3>
            <p>For decades, the bedrock of wealth management was the 60/40 portfolio (60% equities, 40% government bonds). Bonds were relied upon to act as a shock absorber when equities fell. However, during the inflation spikes of the 2020s, both equities and bonds plummeted simultaneously as interest rates were hiked to combat inflation. Bonds, once the ultimate safe haven, suffered historic drawdowns due to rapid duration risk exposure.</p>
            
            <p>A modern, resilient portfolio requires a paradigm shift. Dynamic reallocation into assets that cannot be inflated away by political decree or debt monetization is essential. This elevates sovereign digital assets (like Bitcoin), hard commodities, and quality compounding equities into essential, non-correlated hedges within institutional portfolios.</p>
        `
    },
    "eco_post_2": {
        title: "The 'Higher for Longer' Interest Rate Era",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>The Zero Interest Rate Policy (ZIRP) and quantitative easing experiments that defined the 2010s have definitively ended. The structural inflation the global economy is currently wrestling with is not merely a transient, COVID-induced supply-chain shock. It is the inescapable result of deep, secular macro trends: severe demographic shifts (an aging global workforce exiting the labor pool), the staggering, multi-trillion-dollar capital expenditure required for green energy transitions, and the aggressive reshoring/friend-shoring of manufacturing away from cheap labor hubs like China back to the West.</p>
            
            <h3>Inverted Yield Curves and the Sovereign Debt Trap</h3>
            <p>For an unprecedented number of months, the US Treasury yield curve has remained deeply inverted—a classic, historically accurate predictor of severe economic contraction and recession. When short-term bonds (like the 2-year) yield significantly more than long-term bonds (like the 10-year), it signals that bond markets expect central banks to eventually be forced to slash rates to rescue a failing, over-leveraged economy.</p>
            
            <p>However, central banks are currently caught in a mathematical trap. If they cut rates prematurely to stimulate growth, they risk reigniting the embers of inflation, destroying their credibility. If they hold rates "higher for longer", they risk collapsing the commercial real estate sector and triggering a cascade of regional banking failures (similar to the SVB collapse) as institutions crumble under the pressure of refinancing debt at much higher rates. Furthermore, with US sovereign debt exceeding $34 Trillion, the interest expense alone is on pace to eclipse defense spending, creating a vicious cycle of debt monetization.</p>
            
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Stock Market Graph" style="width:100%; border-radius:12px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">

            <h3>The End of Zombie Companies</h3>
            <p>In a "higher for longer" regime, the cost of capital matters again. Unprofitable growth stocks and highly leveraged "zombie companies" that relied entirely on cheap debt to stay afloat will suffer immensely. The era of venture capital indiscriminately subsidizing cash-burning startups to capture market share is definitively over. Profitability is no longer optional.</p>

            <h3>Compounding Quality as the Ultimate Moat</h3>
            <p>In this restrictive environment, the ultimate defensive and offensive strategy is focusing on <strong>Compounding Quality</strong>. Investors must relentlessly identify companies with massive Free Cash Flow (FCF) generation, fortress-like balance sheets, and consistently high Return on Invested Capital (ROIC).</p>
            
            <p>Businesses that can self-fund their organic growth without tapping expensive debt markets, and those that possess absolute pricing power—the rare ability to pass rising input costs directly onto consumers without suffering a loss in market share or volume—are the only investment vehicles mathematically capable of preserving and growing purchasing power in a structurally inflationary decade.</p>
        `
    },
    "eco_post_3": {
        title: "Macroeconomics of the AI Productivity Boom",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>The rapid integration of Generative AI and Large Language Models (LLMs) into the global workforce represents arguably the largest technological productivity shock since the commercialization of the internet and the personal computer. However, from a strictly macroeconomic perspective, this revolution introduces severe, conflicting forces: intense deflationary pressures on cognitive labor markets colliding violently with massive inflationary capital expenditure (CAPEX) booms in physical infrastructure.</p>
            
            <h3>The GPU Arms Race and CAPEX Explosion</h3>
            <p>The staggering valuations of mega-cap tech stocks (often referred to as the "Magnificent 7") have effectively detached from traditional historical earnings multiples. This divergence is driven almost entirely by the unprecedented global GPU arms race. Sovereign wealth funds, major hyperscalers (Microsoft, Google, Amazon), and Fortune 500 enterprises are aggressively front-loading a decade's worth of compute infrastructure spending into a 24-to-36-month window to avoid being left behind in the AI race.</p>
            
            <p>This massive concentration of capital flows has led to unprecedented market breadth divergence. Stock market index gains are being carried almost entirely by 5 or 6 massive companies selling the "picks and shovels" of the AI gold rush (like Nvidia, TSMC, and ASML), while small and mid-cap stocks, heavily burdened by high interest rates, are drastically underperforming.</p>

            <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Market Analysis" style="width:100%; border-radius:12px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            
            <h3>Labor Deflation vs Hardware Inflation</h3>
            <p>As AI agents and LLMs begin to automate complex, high-paying cognitive tasks—ranging from entry-level software engineering and legal discovery to copywriting and financial analysis—wage growth in these white-collar sectors is highly likely to stagnate. This provides a massive deflationary boost to corporate profit margins, as companies can do significantly more with drastically fewer human employees.</p>
            
            <p>Simultaneously, however, the physical demands of this AI boom are wildly inflationary. The immense electrical energy and raw material requirements to build, cool, and power gigawatt-scale AI data centers are creating severe supply shocks. We are entering a phase where AI compute infrastructure is actively straining national energy grids.</p>
            
            <h3>The Commodity Supercycle</h3>
            <p>This energy deficit is triggering a massive structural supercycle for industrial commodities. The demand for copper (essential for data center wiring and electrification), uranium (as tech giants turn to Small Modular Nuclear Reactors - SMRs for clean, baseline baseload power), and advanced cooling systems is skyrocketing. This creates a highly challenging macroeconomic dichotomy for central banks to manage: profound deflation in the services and software economy, operating simultaneously alongside extreme, structural inflation in hard assets, energy generation, and basic materials.</p>
        `
    },

    // ---- JAVA ----
    "java_virtual_threads": {
        title: "Java 21: Virtual Threads Deep Dive",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>With the highly anticipated release of Java 21, Project Loom officially integrated <strong>Virtual Threads</strong> into the language, fundamentally and permanently changing how software engineers approach high-throughput concurrency in the Java Virtual Machine (JVM). For nearly two decades, the primary scaling bottleneck of massive Java enterprise applications wasn't the CPU, the network, or the memory; it was the Operating System (OS) threads.</p>
            
            <h3>The OS Thread Bottleneck</h3>
            <p>Historically, when a developer instantiated a <code>java.lang.Thread</code>, the JVM created a 1:1 wrapper directly tied to a heavy, underlying operating system thread. OS threads are incredibly expensive resources. They must eagerly reserve massive amounts of memory for the call stack (often 1MB to 2MB per thread) upfront. More importantly, when an OS thread needs to pause or switch contexts, the OS kernel must intervene, saving registers, flushing CPU caches, and reloading state.</p>
            
            <p>Because of this massive overhead, a standard enterprise server could realistically only spin up a few thousand concurrent threads before the OS choked or the application crashed with a fatal <code>OutOfMemoryError: unable to create new native thread</code>. This severe limitation forced the industry to adopt Reactive Programming frameworks (like Project Reactor, Spring WebFlux, and RxJava). Reactive programming allowed apps to scale by carefully managing a tiny pool of threads and using asynchronous callbacks to avoid ever blocking a thread. However, this came at a terrible cost: reactive code is notoriously fragmented, viral, strips away meaningful stack traces, and is exceptionally difficult to debug and maintain.</p>
            
            <h3>The Loom Revolution: Continuations and Carrier Threads</h3>
            <p>Virtual threads obliterate this paradigm. A virtual thread is a lightweight, user-mode thread managed entirely by the JVM's internal scheduler, completely invisible to the host Operating System. The JVM mounts a virtual thread onto a very small, fixed pool of OS threads (called Carrier Threads, typically sized to the number of CPU cores).</p>
            
            <p>Under the hood, this magic relies on a concept called Continuations. When a virtual thread executes a blocking I/O operation (such as waiting for a slow PostgreSQL database query, fetching an HTTP response, or sleeping), the JVM intercepts the block. Instead of blocking the precious underlying OS carrier thread, the JVM seamlessly <em>unmounts</em> the virtual thread's continuation, capturing its current call stack and saving it cheaply onto the Java Heap memory. It then immediately assigns a different, ready-to-run virtual thread to that carrier thread. When the database finally responds, the JVM wakes up the original virtual thread, remounts its stack from the heap onto an available carrier thread, and resumes execution exactly where it left off.</p>
            
            <h3>Structured Concurrency and Scoped Values</h3>
            <p>Because virtual threads require mere kilobytes of memory and take microseconds to spin up, you can comfortably run <em>millions</em> of them concurrently on a standard laptop. You no longer need thread pools; you simply create a new virtual thread for every single incoming HTTP request or database call. You can write simple, readable, synchronous, blocking, top-down code again.</p>
            
            <p>To safely manage millions of threads, Java is also heavily pushing Structured Concurrency (via JEP 453). Instead of firing off asynchronous tasks into the void where they might leak or fail silently, structured concurrency binds the lifetimes of multiple concurrent tasks to a specific lexical scope. It treats multiple tasks running in different threads as a single logical unit of work, ensuring that error handling, short-circuiting, and thread cancellation propagate reliably and instantly.</p>
            
            <p>Furthermore, traditional <code>ThreadLocal</code> variables—which allocate memory per thread—become massive memory sinks when you have millions of virtual threads. To solve this, modern Java introduces Scoped Values. Scoped Values are highly efficient, immutable, and dynamically scoped variables specifically designed to safely share contextual data (like user IDs, security tokens, or transaction IDs) across massive numbers of virtual thread boundaries without the memory overhead of ThreadLocals.</p>
        `
    },
    "java_memory_management": {
        title: "Advanced JVM Memory Management & ZGC",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>Deeply understanding the internal mechanics of the Java Virtual Machine (JVM) memory architecture is absolutely critical for software engineers tasked with building high-throughput, low-latency, mission-critical enterprise applications. The JVM's Memory Heap is the battlefield where performance is won or lost, and where the dreaded "Stop-The-World" Garbage Collection (GC) pauses happen.</p>
            
            <h3>The Weak Generational Hypothesis</h3>
            <p>At the core of almost all JVM memory management is the empirically proven Weak Generational Hypothesis, which states: "The vast majority of newly created objects become unreachable (die) very quickly, and very few old objects reference young objects."</p>
            
            <p>Based on this fact, the JVM logically partitions the heap into distinct areas: The Young Generation (which is further subdivided into the Eden space and two Survivor spaces, S0 and S1) and the Old (Tenured) Generation. When a Java app instantiates a new object with the <code>new</code> keyword, memory is allocated extremely fast in the Eden space using Thread-Local Allocation Buffers (TLABs) to prevent lock contention between threads.</p>
            
            <p>When Eden fills up, a "Minor GC" occurs. The GC traces from GC Roots (active threads, static variables) to find living objects. Everything else in Eden is considered garbage and is instantly discarded. Surviving objects are moved to a Survivor space. If an object survives enough Minor GC cycles (its "tenuring threshold"), it is promoted to the Old Generation. G1GC (Garbage First Garbage Collector), the default collector since Java 9, heavily optimized this process by splitting the entire heap into hundreds of small, equal-sized regions and prioritizing the collection of regions that contain the most garbage, thereby keeping pause times relatively predictable.</p>

            <h3>The Rise of Ultra-Low Latency: ZGC & Shenandoah</h3>
            <p>While G1GC is excellent for general-purpose web applications, it still requires "Stop-The-World" pauses to safely move objects around in memory to prevent fragmentation. In the modern era of algorithmic high-frequency trading platforms, real-time gaming backends, and massive AI data pipelines, even a 50-millisecond pause is unacceptable. This gave rise to the ultra-low latency collectors: ZGC (The Z Garbage Collector, built by Oracle) and Shenandoah (built by Red Hat).</p>
            
            <p>These revolutionary collectors perform almost all of their heavy lifting—including the most complex phases of marking live objects, relocating them to compact memory, and updating all the references to those moved objects—<strong>concurrently</strong> alongside the running application threads. They never stop the application to move objects.</p>
            
            <h3>Colored Pointers and Load Barriers in ZGC</h3>
            <p>ZGC achieves its incredible sub-millisecond pause times through the highly innovative use of Colored Pointers and Load Barriers. In a 64-bit architecture, a memory pointer has 64 bits, but modern operating systems only use about 44 bits to address memory. ZGC brilliantly steals a few of the unused high-order bits in the memory pointer itself to store metadata ("colors") indicating the object's GC state: whether it has been marked, remapped, or needs relocation.</p>
            
            <p>Coupled with this is the Load Barrier—a tiny snippet of code that the Just-In-Time (JIT) compiler injects every time a Java thread tries to read an object reference from the heap. If an application thread tries to access an object that ZGC is currently in the middle of moving, the Load Barrier detects the color flag on the pointer. The barrier safely intercepts the read, finishes moving the object, updates the pointer to the new memory location, and then lets the application thread proceed with the correct, updated address.</p>
            
            <p>Because the threads fix up pointers as they access them (a self-healing mechanism), ZGC does not need to pause the entire system to update references. The result is pure engineering magic: whether your application's heap size is a tiny 500 Megabytes or a colossal 16 Terabytes, ZGC guarantees that Garbage Collection pause times will never exceed 1 millisecond. This completely redefines the capabilities of Java, allowing it to compete directly with C++ and Rust in extreme low-latency domains.</p>
        `
    },

    // ---- ARTIFICIAL INTELLIGENCE ----
    "ai_llm_architecture": {
        title: "Understanding LLM Architectures: Transformers & MoE",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>Large Language Models (LLMs) such as OpenAI's GPT-4, Anthropic's Claude 3, and Google's Gemini have completely revolutionized the field of artificial intelligence, moving us closer to AGI (Artificial General Intelligence) than ever before. But what actually makes them tick under the hood? The answer lies in a radical architectural shift away from sequential data processing towards highly parallelized, attention-based mechanisms that leverage massive compute clusters.</p>
            
            <h3>The Death of RNNs and The Transformer Architecture</h3>
            <p>Prior to 2017, the dominant architecture for processing natural language was the Recurrent Neural Network (RNN) and its variants like LSTMs. RNNs processed text sequentially, reading one word at a time, updating an internal hidden state. This created a massive bottleneck: they could not be easily parallelized across GPUs, and they suffered from catastrophic "short-term memory loss" when dealing with long paragraphs of text. They would forget the beginning of a sentence by the time they reached the end.</p>
            
            <p>This changed forever with the publication of the seminal paper "Attention Is All You Need" by Google researchers, which introduced the <strong>Transformer</strong> architecture. The Transformer completely discarded sequential processing. Instead, it utilizes a <strong>Self-Attention Mechanism</strong> to analyze an entire context window of text simultaneously. Mathematically, it projects every word (token) into three massive matrices: Queries (Q), Keys (K), and Values (V). By computing the dot product of Queries and Keys, the network evaluates mathematically how relevant every single token is to every other token in the prompt, regardless of distance.</p>
            
            <p>Through "Multi-Head Attention", the model can simultaneously focus on different linguistic aspects—one head might track pronouns (linking "he" to "John"), another might track grammar, and another might track the emotional sentiment. This allows the model to understand deep contextual nuances, heavy sarcasm, and complex logical structures that baffled earlier AIs.</p>
            
            <h3>The Mixture of Experts (MoE) Paradigm</h3>
            <p>As researchers realized that bigger models perform better (The Scaling Laws), models grew from millions to hundreds of billions, and now trillions of parameters. However, pushing a prompt through a dense 1.5 Trillion parameter network for every single word generated requires astronomical compute power and memory bandwidth, making API costs economically unviable.</p>
            
            <p>To solve this, modern state-of-the-art models (like GPT-4 and Mixtral) utilize a Mixture of Experts (MoE) architecture. Instead of one giant, dense neural network where every neuron fires for every word, the model is composed of many smaller, specialized "expert" sub-networks. A dynamic Gating/Routing network acts as a traffic controller. For any given token, the router decides which 2 or 3 experts are best suited to handle it (e.g., sending coding questions to the logic expert, and translation questions to the linguistics expert).</p>
            
            <p>This sparse architecture is revolutionary. It allows a model to possess a massive total parameter count (e.g., 1.5 Trillion) encoding vast amounts of world knowledge, but it only actively uses a small fraction (e.g., 200 Billion active parameters) for any specific token prediction. This drastically reduces inference latency, slashes API compute costs, and maintains super-intelligence performance.</p>

            <h3>Emergent Abilities and Alignment via RLHF</h3>
            <p>As these neural networks scaled to massive sizes trained on petabytes of internet data, researchers observed highly unpredictable 'emergent abilities'. A base foundation model, explicitly trained using only the simple objective function of "predict the next word in the sequence," suddenly and spontaneously developed zero-shot logical reasoning, cross-lingual translation capabilities, step-by-step math problem-solving, and advanced Python coding skills. This scaling law proves that sheer computational brute force, combined with high-quality datasets, directly correlates with generalized cognitive abilities.</p>
            
            <p>However, base models are wild, unpredictable, and highly prone to generating toxic or hallucinated content—they simply mirror the raw internet. To align these alien intelligences with human values, a post-training phase is critical. Techniques like RLHF (Reinforcement Learning from Human Feedback) and DPO (Direct Preference Optimization) are heavily applied. Humans rank the model's outputs, training a separate reward model, which then fine-tunes the main LLM via reinforcement learning to act as a helpful, harmless, and honest assistant, transforming a chaotic text predictor into the polished chatbots we use today.</p>
        `
    },
    "spring_boot_ai": {
        title: "Spring Boot & Vector Databases: Building RAG Pipelines",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        content: `
            <p>Integrating Generative AI and Large Language Models into robust, highly-available, and secure enterprise Java applications is now incredibly streamlined thanks to the rapid evolution of the <strong>Spring AI</strong> framework. While ChatGPT is excellent for general knowledge, the primary challenge for true enterprise AI adoption is twofold: base LLMs confidently hallucinate false information, and they possess absolutely zero knowledge of a company's highly secure, private, proprietary data (such as internal HR policies, specific customer transaction histories, or proprietary codebase documentation).</p>
            
            <h3>Retrieval-Augmented Generation (RAG) Architecture</h3>
            <p>To solve this hallucination problem and inject domain-specific knowledge without spending millions of dollars and months of GPU time fine-tuning custom models, enterprise developers utilize RAG (Retrieval-Augmented Generation) architectures. RAG bridges the gap between secure internal databases and external cognitive engines.</p>
            
            <p>The process begins with an ingestion pipeline. By pairing Spring Boot with specialized vector databases (such as Milvus, Pinecone, Weaviate, or PostgreSQL running the pgvector extension), we transform standard, unstructured enterprise text documents (PDFs, Word docs, Confluence pages) into high-dimensional mathematical arrays called <strong>Embeddings</strong>. These embeddings (often generated by specialized models like OpenAI's <code>text-embedding-3-small</code>) plot the semantic meaning of the text into a multi-dimensional space.</p>
            
            <p>When an employee or customer queries the system (e.g., "What is our company policy on remote work travel expenses?"), the Spring AI backend intercepts the query. It instantly converts the user's question into an embedding vector and performs a blazing-fast mathematical Nearest Neighbor (Cosine Similarity) search against the vector database. This search retrieves the top 3 or 4 chunks of proprietary documents whose semantic meaning closest matches the user's question.</p>
            
            <p>Finally, these securely retrieved internal documents are dynamically injected directly into the LLM's prompt window (the context). The LLM is given a strict system prompt: "You are a helpful corporate assistant. Answer the user's question based strictly and exclusively on the provided context documents. If the answer is not in the context, say 'I do not know'." This entirely neutralizes hallucinations and ensures highly accurate, fact-based answers grounded securely in the company's reality.</p>
            
            <h3>Abstracting the AI Layer to Prevent Vendor Lock-in</h3>
            <p>In the fast-moving AI space, tying an entire enterprise architecture to a single API provider (like OpenAI) is a massive strategic risk. Models are leapfrogging each other weekly. The core philosophy of the Spring Framework has always been abstraction and dependency injection, and Spring AI applies this perfectly to the AI ecosystem.</p>
            
            <p>Just as Spring Data JPA abstracts away the underlying SQL syntax—allowing a developer to seamlessly swap a MySQL database for PostgreSQL without rewriting any business logic—Spring AI cleanly abstracts the AI provider's API implementations. It provides standardized Java interfaces like <code>ChatClient</code>, <code>EmbeddingClient</code>, and <code>VectorStore</code>.</p>
            
            <p>Because of this architecture, an enterprise can seamlessly switch their backend execution engine from OpenAI's GPT-4 to Anthropic's Claude 3, Google's Gemini, or Mistral simply by changing a single line in the <code>application.properties</code> configuration file and swapping a Maven dependency. More importantly, for highly regulated industries (like banking and healthcare) that cannot send PII data over the public internet, Spring AI allows developers to effortlessly point the application to run against localized, open-source models (like Meta's LLaMA 3 or Qwen) running entirely on-premise within the company's secure intranet using local execution engines like Ollama. This provides ultimate flexibility, security, and future-proofing for enterprise software.</p>
        `
    }
};

// =========================================
// OTOMATİK 75 KOD GÜVENLİK MOTORU
// =========================================
function ensure75CodeBlocks() {
    const totalNeeded = 75; 
    let existingCodes = document.querySelectorAll('.background-code');
    
    if (existingCodes.length === 0) return; 

    if (existingCodes.length < totalNeeded) {
        const missing = totalNeeded - existingCodes.length;
        const container = existingCodes[0].parentElement; 
        
        for (let i = 0; i < missing; i++) {
            let clone = existingCodes[i % existingCodes.length].cloneNode(true);
            clone.className = 'background-code'; 
            container.insertBefore(clone, existingCodes[0]); 
        }
    }
}

// =========================================
// 1. UTILITIES (THROTTLE VE DEBOUNCE)
// =========================================
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

if (window.top !== window.self) { window.top.location = window.self.location; }

let cachedScrollY = 0;
window.addEventListener('scroll', () => { cachedScrollY = window.scrollY; }, { passive: true });

// =========================================
// MİKRO SESLER MOTORU (ÇOK DÜŞÜK SES %0.3)
// =========================================
function initMicroSounds() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return; 
    
    const audioCtx = new AudioContext();

    const playFuturisticClick = () => {
        if(audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.type = 'sine'; 
        osc.frequency.setValueAtTime(1000, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.08); 

        gainNode.gain.setValueAtTime(0.003, audioCtx.currentTime); 
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05); 

        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.08);
    };

    document.querySelectorAll('a, button, .nav-btn, .ripple-effect, .article-trigger, .lang-switch-label, .tilt-card').forEach(el => {
        el.addEventListener('mousedown', playFuturisticClick);
    });
}

// =========================================
// MAKSİMUM PERFORMANS VE ÖN YÜKLEME
// =========================================
function initPerformanceOptimizations() {
    const loadImages = () => {
        for (let key in articlesDatabase) {
            if (articlesDatabase[key].image) {
                const img = new Image();
                img.src = articlesDatabase[key].image;
            }
        }
    };
    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadImages);
    } else {
        setTimeout(loadImages, 1500);
    }

    const prefetchCache = new Set();
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (href && (href.startsWith('/') || href.startsWith('./') || !href.startsWith('http')) && !href.startsWith('#') && !prefetchCache.has(href)) {
                const prefetchLink = document.createElement('link');
                prefetchLink.rel = 'prefetch';
                prefetchLink.href = href;
                document.head.appendChild(prefetchLink);
                prefetchCache.add(href);
            }
        }, { passive: true });
    });
}

// =========================================
// IŞIK HUZMESİ (MOUSE BEAM)
// =========================================
function initLightBeams() {
    if(document.querySelector('.light-beam')) return; 
    
    const beam = document.createElement('div');
    beam.className = 'light-beam';
    document.body.appendChild(beam);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const updatePos = (e) => {
        if (e.touches && e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    };

    document.addEventListener('mousemove', updatePos, { passive: true });
    document.addEventListener('touchmove', updatePos, { passive: true });

    const animateBeam = () => {
        currentX += (mouseX - currentX) * 0.15; 
        currentY += (mouseY - currentY) * 0.15;
        beam.style.transform = `translate3d(calc(${currentX}px - 50%), calc(${currentY}px - 50%), 0)`;
        requestAnimationFrame(animateBeam);
    };
    requestAnimationFrame(animateBeam);
}

// =========================================
// TİYATRAL İZOMETRİK SCROLL KOREOGRAFİSİ 
// ÇÖZÜM: Scroll yüksekliğini bozmayacak hafif bir saydamlık animasyonuna döndü
// =========================================
function initTheatricalScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('theatrical-hidden');
                    setTimeout(() => {
                        entry.target.classList.remove('theatrical-reveal');
                    }, 800); 
                }, entry.target.dataset.staggerDelay || 0);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: "0px 0px -50px 0px" });

    const selectors = ['.tilt-card', '.recent-posts-box', '.profile-card', '.details-area', '.contact-wrapper', '.post-link', '.crypto-badge', '.contact-info-item', '.contact-input', '.tech-tag', '.hero-title'];
    
    document.querySelectorAll(selectors.join(', ')).forEach((el, i) => {
        el.classList.add('theatrical-hidden', 'theatrical-reveal');
        el.dataset.staggerDelay = (i % 6) * 100; 
        observer.observe(el);
    });
}

// =========================================
// 2. KULLANICI ARAYÜZÜ (UI) & ANİMASYONLAR
// =========================================
let typingTimeout;
function initTypingEffect(textToType) {
    const heroTitle = document.getElementById('heroTitle');
    if (!heroTitle) return;

    clearTimeout(typingTimeout);
    heroTitle.textContent = ''; 
    let i = 0;
    
    function typeWriter() {
        if (i < textToType.length) {
            heroTitle.textContent += textToType.charAt(i);
            i++;
            typingTimeout = setTimeout(typeWriter, 80); 
        }
    }
    typingTimeout = setTimeout(typeWriter, 500); 
}

// P5.JS ORGANİK TÜRBÜLANS VE GELİŞMİŞ 3D DERİNLİK
function initBackground() {
    ensure75CodeBlocks();

    if (typeof p5 === 'undefined') {
        console.warn('P5.js kütüphanesi yüklenemedi.');
        return;
    }

    const sketch = (p) => {
        let particles = [];
        let flowField = [];
        let cols, rows;
        let scl = 30; 
        let zoff = 0; 
        let domCodes = []; 
        let isMobile = false;
        let lastWidth = 0;

        p.setup = () => {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.position(0, 0);
            canvas.style('z-index', '-2');
            canvas.style('pointer-events', 'none');
            canvas.style('position', 'fixed');

            isMobile = p.windowWidth < 768;
            lastWidth = p.windowWidth;
            
            cols = p.floor(p.width / scl) + 1;
            rows = p.floor(p.height / scl) + 1;
            flowField = new Array(cols * rows);

            const numParticles = isMobile ? 85 : 160;
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }

            const codes = document.querySelectorAll('.background-code');
            codes.forEach((el) => {
                el.style.top = '0px';
                el.style.left = '0px';
                
                domCodes.push({
                    el: el,
                    baseX: p.random(-p.width * 0.2, p.width * 1.2),
                    baseY: p.random(-p.height * 0.2, p.height * 1.2),
                    noiseOffsetX: p.random(10000), 
                    noiseOffsetY: p.random(10000),
                    noiseOffsetZ: p.random(10000),
                    noiseRotX: p.random(10000),
                    noiseRotY: p.random(10000)
                });
            });
        };

        p.windowResized = () => {
            if (p.windowWidth !== lastWidth) {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
                lastWidth = p.windowWidth;
                isMobile = p.windowWidth < 768;
                cols = p.floor(p.width / scl) + 1;
                rows = p.floor(p.height / scl) + 1;
                flowField = new Array(cols * rows);
            }
        };

        p.draw = () => {
            p.clear(); 
            
            const isLight = document.body.classList.contains('light-mode');
            let yoff = 0;

            for (let y = 0; y < rows; y++) {
                let xoff = 0;
                for (let x = 0; x < cols; x++) {
                    let index = x + y * cols;
                    let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
                    let v = p5.Vector.fromAngle(angle);
                    v.setMag(0.5); 
                    flowField[index] = v;
                    xoff += 0.05;
                }
                yoff += 0.05;
            }
            zoff += 0.002; 

            for (let i = 0; i < particles.length; i++) {
                particles[i].follow(flowField);
                particles[i].update();
                particles[i].edges();
                particles[i].show(isLight);
            }

            const parallaxY = -(cachedScrollY * (isMobile ? 0.05 : 0.1));

            for (let i = 0; i < domCodes.length; i++) {
                let item = domCodes[i];

                let moveX = p.map(p.noise(item.noiseOffsetX), 0, 1, -1.2, 1.2);
                let moveY = p.map(p.noise(item.noiseOffsetY), 0, 1, -1.2, 1.2);

                item.baseX += moveX;
                item.baseY += moveY;

                if (item.baseX > p.width + 300) item.baseX = -300;
                if (item.baseX < -300) item.baseX = p.width + 300;
                if (item.baseY > p.height + 300) item.baseY = -300;
                if (item.baseY < -300) item.baseY = p.height + 300;
                
                let zDepth = p.map(p.noise(item.noiseOffsetZ), 0, 1, 0.5, 1.5); 
                let depthOpacity = p.map(zDepth, 0.5, 1.5, 0.1, 0.85); 
                
                let rotX = p.map(p.noise(item.noiseRotX), 0, 1, -35, 35);
                let rotY = p.map(p.noise(item.noiseRotY), 0, 1, -35, 35);

                item.noiseOffsetX += 0.0005; 
                item.noiseOffsetY += 0.0005;
                item.noiseOffsetZ += 0.001;
                item.noiseRotX += 0.001;
                item.noiseRotY += 0.001;

                item.el.style.transform = `translate3d(calc(${item.baseX}px), calc(${item.baseY}px + ${parallaxY}px), 0) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${zDepth}) translate(-50%, -50%)`;
                item.el.style.opacity = depthOpacity;
            }
        };

        class Particle {
            constructor() {
                this.pos = p.createVector(p.random(p.width), p.random(p.height));
                this.vel = p.createVector(0, 0);
                this.acc = p.createVector(0, 0);
                this.maxSpeed = p.random(1.5, 3.5);
                this.history = [];
                this.maxHistory = p.floor(p.random(10, 30)); 
            }

            follow(vectors) {
                let x = p.floor(this.pos.x / scl);
                let y = p.floor(this.pos.y / scl);
                let index = x + y * cols;
                let force = vectors[index];
                if(force) this.acc.add(force);
            }

            update() {
                this.vel.add(this.acc);
                this.vel.limit(this.maxSpeed);
                this.pos.add(this.vel);
                this.acc.mult(0);
                
                this.history.push({x: this.pos.x, y: this.pos.y});
                
                if (this.history.length > this.maxHistory) {
                    this.history.splice(0, 1);
                }
            }

            show(isLight) {
                p.noFill();
                p.beginShape();
                for (let i = 0; i < this.history.length; i++) {
                    let pos = this.history[i];
                    let alpha = p.map(i, 0, this.history.length, 0, 150); 
                    
                    if (isLight) {
                        p.stroke(0, 128, 102, alpha); 
                    } else {
                        if (this.maxSpeed > 2.5) {
                            p.stroke(0, 255, 204, alpha); 
                        } else {
                            p.stroke(153, 50, 204, alpha); 
                        }
                    }
                    p.vertex(pos.x, pos.y);
                }
                p.endShape();
            }

            edges() {
                let hitEdge = false;
                if (this.pos.x > p.width) { this.pos.x = 0; hitEdge = true; }
                if (this.pos.x < 0) { this.pos.x = p.width; hitEdge = true; }
                if (this.pos.y > p.height) { this.pos.y = 0; hitEdge = true; }
                if (this.pos.y < 0) { this.pos.y = p.height; hitEdge = true; }
                
                if (hitEdge) { this.history = []; }
            }
        }
    };
    
    new p5(sketch);
}

// =========================================
// 3. 3D KARTLAR 
// =========================================
function toggleCard(element) {
    element.classList.toggle('active');
    const isExpanded = element.classList.contains('active');
    element.setAttribute('aria-expanded', isExpanded);
    
    const links = element.querySelectorAll('.card-post-item');
    links.forEach(link => {
        if(isExpanded) { link.removeAttribute('tabindex'); } 
        else { link.setAttribute('tabindex', '-1'); }
    });
}

function initTiltCards() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        
        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-posts-list')) { return; }
            toggleCard(card);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard(card);
            }
        });

        let ticking = false;
        card.addEventListener('mousemove', (e) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if(card.classList.contains('active')) {
                        card.style.setProperty('--rotateX', `0deg`);
                        card.style.setProperty('--rotateY', `0deg`);
                    } else {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        
                        const rotateX = ((y - centerY) / centerY) * -4; 
                        const rotateY = ((x - centerX) / centerX) * 4;
                        
                        card.style.setProperty('--rotateX', `${rotateX}deg`);
                        card.style.setProperty('--rotateY', `${rotateY}deg`);
                        card.style.setProperty('--mouse-x', `${x}px`);
                        card.style.setProperty('--mouse-y', `${y}px`);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', `0deg`);
            card.style.setProperty('--rotateY', `0deg`);
            card.style.setProperty('--mouse-x', `-1000px`); 
            card.style.setProperty('--mouse-y', `-1000px`);
        }, { passive: true });
    });
}

// =========================================
// 4. MODAL YÖNETİMİ 
// =========================================
function initArticleModals() {
    const modal = document.getElementById('articleModal');
    const closeBtn = document.getElementById('closeArticleModal');
    const titleEl = document.getElementById('modalArticleTitle');
    const bodyEl = document.getElementById('modalArticleBody');
    const imgContainer = document.getElementById('modalImageContainer');

    if(!modal) return;

    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.article-trigger');
        if (!trigger) return;

        e.preventDefault();
        e.stopPropagation(); 

        const articleId = trigger.getAttribute('data-id');
        const data = articlesDatabase[articleId];

        if(data) {
            titleEl.textContent = data.title;
            bodyEl.innerHTML = data.content;
            
            if(data.image && imgContainer) {
                imgContainer.style.backgroundImage = `url('${data.image}')`;
                imgContainer.style.display = 'block';
            } else if (imgContainer) {
                imgContainer.style.display = 'none';
            }

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            document.body.style.overflow = 'hidden'; 
            document.documentElement.style.overflow = 'hidden'; 
            document.body.style.paddingRight = `${scrollbarWidth}px`; 

            requestAnimationFrame(() => {
                modal.classList.add('active');
                const modalBox = modal.querySelector('.modal-box');
                if (modalBox) {
                    modalBox.scrollTop = 0; 
                }
            });
        }
    });

    const closeModal = () => {
        modal.classList.remove('active');
        
        setTimeout(() => {
            document.body.style.overflow = ''; 
            document.documentElement.style.overflow = ''; 
            document.body.style.paddingRight = ''; 
        }, 300);
    };

    if(closeBtn) { closeBtn.addEventListener('click', closeModal); }

    window.addEventListener('click', (e) => {
        if (e.target === modal) { closeModal(); }
    });
}

// =========================================
// 5. GENEL MANTIK VE APİ'LER
// =========================================
function initThemeAndPanel() {
    const body = document.body;
    const html = document.documentElement;

    if (localStorage.getItem('theme') === 'light') { 
        body.classList.add('light-mode'); 
        html.classList.add('light-mode');
    }

    const topPanel = document.querySelector('.top-control-panel');
    const panelToggleBtn = document.getElementById('glassPanelToggle');

    if (topPanel && panelToggleBtn) {
        panelToggleBtn.addEventListener('click', () => {
            topPanel.classList.toggle('open');
            panelToggleBtn.style.transform = topPanel.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
        });

        document.addEventListener('click', (e) => {
            if (!topPanel.contains(e.target)) {
                topPanel.classList.remove('open');
                panelToggleBtn.style.transform = 'rotate(0deg)';
            }
        });
    }

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            html.classList.toggle('light-mode');
            localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }
}

function initSearchEngine() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function performSearch() {
        if (!searchInput) return;
        const rawSearchTerm = searchInput.value.toLowerCase().trim();
        const sanitizedTerm = rawSearchTerm.replace(/[<&>]/g, c => ({'<': '&lt;', '>': '&gt;', '&': '&amp;'}[c]));
        const scrollAreas = document.querySelectorAll('.posts-scroll-area, .card-posts-list');

        if (scrollAreas.length === 0) return;

        scrollAreas.forEach(area => {
            const links = area.querySelectorAll('a'); 
            let hasVisible = false;

            const existingMsg = area.querySelector('.no-results-msg');
            if (existingMsg) existingMsg.remove();

            links.forEach(link => {
                const text = link.textContent.toLowerCase();
                if (text.includes(sanitizedTerm)) {
                    link.style.display = ''; 
                    link.style.animation = 'none'; 
                    setTimeout(() => link.style.animation = 'fadeInUp 0.3s ease forwards', 10); 
                    hasVisible = true;
                } else { link.style.display = 'none'; }
            });

            if (!hasVisible && sanitizedTerm !== '') {
                const msg = document.createElement('span');
                msg.className = 'no-results-msg animate-entry';
                msg.style.cssText = 'color: var(--text-color); opacity: 0.5; display: block; text-align: center; padding: 15px; font-style: italic;';
                const lang = localStorage.getItem('lang') || 'en';
                msg.textContent = lang === 'tr' ? `"${sanitizedTerm}" için sonuç bulunamadı.` : `No results found for "${sanitizedTerm}".`;
                area.appendChild(msg);
            }
        });
    }

    if (searchInput) {
        const debouncedSearch = debounce(performSearch, 300);
        searchInput.addEventListener('input', debouncedSearch); 
        searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') performSearch(); });
    }
    if (searchBtn) searchBtn.addEventListener('click', performSearch);
}

async function fetchGitHubRepos() {
    const repoContainer = document.getElementById('github-repos');
    if (!repoContainer) return; 

    try {
        const response = await fetch('https://api.github.com/users/UmutVarol/repos?sort=updated&per_page=4');
        if (!response.ok) throw new Error('API Error');
        const repos = await response.json();
        repoContainer.innerHTML = ''; 
        
        repos.forEach(repo => {
            const a = document.createElement('a');
            a.href = repo.html_url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'post-link ripple-effect animate-entry'; 
            a.textContent = repo.name + (repo.language ? ` [${repo.language}]` : '');
            repoContainer.appendChild(a);
        });
    } catch (error) {
        repoContainer.innerHTML = '<p style="text-align: center; color: #ff5555; opacity: 0.8;">Error loading projects.</p>';
    }
}

async function fetchFinanceRates() {
    const cryptoContainer = document.getElementById('crypto-rates');
    if (!cryptoContainer) return; 

    try {
        const [fiatRes, cryptoRes] = await Promise.all([
            fetch('https://open.er-api.com/v6/latest/USD'),
            fetch('https://api.binance.com/api/v3/ticker/price') 
        ]);
        
        const fiatData = await fiatRes.json();
        const cryptoData = await cryptoRes.json();

        const usdTry = fiatData.rates.TRY;
        const eurUsd = 1 / fiatData.rates.EUR;
        const eurTry = eurUsd * usdTry;

        const getCryptoPrice = (symbol) => {
            const item = cryptoData.find(x => x.symbol === symbol);
            return item ? parseFloat(item.price) : 0;
        };

        const btcUsd = getCryptoPrice('BTCUSDT');
        const ethUsd = getCryptoPrice('ETHUSDT');
        const paxgUsd = getCryptoPrice('PAXGUSDT'); 
        const goldGramTry = (paxgUsd / 31.1035) * usdTry;
        
        cryptoContainer.innerHTML = ''; 
        const createBadge = (label, value) => {
            const badge = document.createElement('span');
            badge.className = 'crypto-badge animate-entry'; 
            badge.textContent = `${label}: ${value}`;
            cryptoContainer.appendChild(badge);
        };

        createBadge('GOLD/GR', `₺${goldGramTry.toFixed(0)}`);
        createBadge('USD/TRY', `₺${usdTry.toFixed(2)}`);
        createBadge('EUR/TRY', `₺${eurTry.toFixed(2)}`);
        createBadge('BTC/USD', `$${btcUsd.toLocaleString('en-US', {maximumFractionDigits: 0})}`);
        createBadge('ETH/USD', `$${ethUsd.toLocaleString('en-US', {maximumFractionDigits: 0})}`);
        
    } catch (error) {
        cryptoContainer.innerHTML = '<span style="color: #ff5555; font-size: 0.85rem;">Rates unavailable.</span>';
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const statusDiv = document.getElementById('formStatus');
            if(!submitBtn) return;

            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Gönderiliyor...";
            submitBtn.disabled = true;
            if(statusDiv) {
                statusDiv.style.color = '#e0e0e0';
                statusDiv.textContent = 'Sunucuyla bağlantı kuruluyor...';
            }

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json' 
                    }
                });

                const result = await response.json();

                if (response.ok) {
                    if(statusDiv) { 
                        statusDiv.style.color = '#00ffcc'; 
                        statusDiv.innerHTML = "✅ Mesajınız başarıyla gönderildi!"; 
                    }
                    contactForm.reset();
                } else {
                    if(statusDiv) { 
                        statusDiv.style.color = '#ff5555'; 
                        statusDiv.innerHTML = `❌ Sunucu Hatası: ${result.message} <br><span style="font-size:0.85rem; color:#ffaa00;">Detay: ${result.errorDetails || 'Bilinmiyor'}</span>`; 
                    }
                }
            } catch (error) {
                console.error("Fetch Hatası:", error);
                if(statusDiv) { 
                    statusDiv.style.color = '#ffaa00'; 
                    statusDiv.innerHTML = `⚠️ <b>Sistem Uyarısı:</b> Sunucu bağlantı hatası! Lütfen internet bağlantınızı kontrol edin.`; 
                }
            } finally {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
}

function initPageTransitions() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.target === '_blank' || e.ctrlKey || e.metaKey) return;
            
            const href = this.getAttribute('href');
            if (!href) return;
            
            if (this.classList.contains('article-trigger') || href.startsWith('#') || href.startsWith('mailto:')) return;

            const isInternal = this.hostname === window.location.hostname || href.startsWith('/') || href.startsWith('./') || !href.startsWith('http');
            
            if (isInternal) {
                e.preventDefault(); 
                document.body.classList.add('page-leaving');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 100); 
            }
        });
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('page-leaving');
        }
    });
}

// =========================================
// GİZLİ ADMİN PANELİ 
// =========================================
function initAdminPanel() {
    const adminHTML = `
    <div id="adminModal" class="modal-overlay">
        <div class="modal-box glass-effect" style="max-width: 600px; padding: 40px;">
            <button id="closeAdminModal" class="close-modal">&times;</button>
            <h2 class="hero-title-small" style="font-size: 2.2rem; margin-bottom: 25px; color: #00ffcc; text-shadow: 0 0 15px rgba(0,255,204,0.4);">🛠 GİZLİ ADMİN PANELİ</h2>
            <form id="adminForm" class="contact-form">
                <input type="text" id="adminTitle" class="contact-input glass-effect" placeholder="Makale Başlığı (Title)" required>
                <input type="text" id="adminCategory" class="contact-input glass-effect" placeholder="Kategori (Örn: WEB3, AI, JAVA)" required>
                <input type="url" id="adminImage" class="contact-input glass-effect" placeholder="Kapak Resmi URL (Unsplash vb.)" required>
                <textarea id="adminContent" class="contact-input glass-effect" placeholder="Makale İçeriği (HTML formatında: <p>, <h3> vb.)..." style="min-height: 220px;" required></textarea>
                <button type="submit" id="adminSubmitBtn" class="nav-btn ripple-effect" style="width: 100%; margin-top: 15px;">🚀 Sunucuya Gönder (POST)</button>
            </form>
            <div id="adminStatus" style="margin-top: 20px; text-align: center; font-weight: bold; font-size: 1.1rem;"></div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', adminHTML);

    const adminModal = document.getElementById('adminModal');
    const closeAdminModal = document.getElementById('closeAdminModal');
    const adminForm = document.getElementById('adminForm');
    const adminStatus = document.getElementById('adminStatus');
    const adminSubmitBtn = document.getElementById('adminSubmitBtn');

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
            adminModal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        }
    });

    closeAdminModal.addEventListener('click', () => {
        adminModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target === adminModal) {
            adminModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    adminForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const originalText = adminSubmitBtn.textContent;
        adminSubmitBtn.textContent = 'Veritabanına İşleniyor...';
        adminSubmitBtn.disabled = true;
        adminStatus.textContent = 'Sunucuyla iletişim kuruluyor...';
        adminStatus.style.color = '#e0e0e0';

        const newPost = {
            id: 'post_' + Date.now(), 
            title: document.getElementById('adminTitle').value,
            category: document.getElementById('adminCategory').value,
            image: document.getElementById('adminImage').value,
            content: document.getElementById('adminContent').value,
            link: "#"
        };

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost)
            });

            if (response.ok) {
                adminStatus.textContent = '✅ BAŞARILI: Makale Node.js Veritabanına (posts.json) Eklendi!';
                adminStatus.style.color = '#00ffcc';
                adminForm.reset();
            } else {
                adminStatus.textContent = '❌ HATA: Sunucu isteği reddetti.';
                adminStatus.style.color = '#ff5555';
            }
        } catch (error) {
            console.error("Admin POST Hatası:", error);
            adminStatus.innerHTML = '⚠️ <b>Bağlantı Hatası:</b> Node.js (server.js) aktif değil veya internet yok.';
            adminStatus.style.color = '#ffaa00';
        } finally {
            adminSubmitBtn.textContent = originalText;
            adminSubmitBtn.disabled = false;
        }
    });
}

// ÇEVİRİ SİSTEMİ 
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_posts: "Posts", nav_contact: "Contact",
        search_label: "Search topics...", search_btn: "Search",
        categories: "CATEGORIES & POSTS", economy_finance: "ECONOMY & FINANCE", java: "JAVA", ai: "ARTIFICIAL INTELLIGENCE",
        hero_title: "Welcome to My Blog", last_posts: "Last Posts", github_projects: "Latest GitHub Projects",
        
        contact_page_title: "CONTACT ME",
        contact_title: "GET IN TOUCH",
        contact_desc: "I'm always open to discussing new projects, software architecture, or opportunities to be part of your visions.",
        location_label: "Location",
        email_label: "Email",
        social_label: "Social Profiles",
        placeholder_name: "Your Name",
        placeholder_email: "Your Email",
        placeholder_subject: "Subject",
        placeholder_message: "Your Message...",
        send_message: "Send Message",

        about_title: "ABOUT ME",
        about_desc: "I am a curious and highly motivated Software Engineering student with foundational knowledge in AI development, database systems, object-oriented programming, data management, and web development. I have a specialized, passionate interest in blockchain technologies and actively develop projects to constantly enhance my technical skills. I am seeking an opportunity in a dynamic organization where I can further develop myself, apply my research-driven mindset, and make meaningful contributions.",
        tech_skills: "TECHNICAL EXPERTISE",
        web_dev: "Web Development",
        work_ethic: "WORK ETHIC",
        work_ethic_desc: "I am committed to delivering excellence in every project, consistently striving to integrate ethical standards and global values into my workflow."
    },
    tr: {
        nav_home: "Ana Sayfa", nav_about: "Hakkımda", nav_posts: "Yazılar", nav_contact: "İletişim",
        search_label: "Konu Ara...", search_btn: "Ara",
        categories: "KATEGORİLER VE YAZILAR", economy_finance: "EKONOMİ & FİNANS", java: "JAVA", ai: "YAPAY ZEKA",
        hero_title: "Bloguma Hoş Geldiniz", last_posts: "Son Yazılar", github_projects: "Son GitHub Projeleri",
        
        contact_page_title: "İLETİŞİM",
        contact_title: "İLETİŞİME GEÇİN",
        contact_desc: "Yeni projeleri, yazılım mimarisini veya vizyonunuzun bir parçası olma fırsatlarını tartışmaya her zaman açığım.",
        location_label: "Konum",
        email_label: "E-Posta",
        social_label: "Sosyal Medya",
        placeholder_name: "Adınız",
        placeholder_email: "E-Posta Adresiniz",
        placeholder_subject: "Konu",
        placeholder_message: "Mesajınız...",
        send_message: "Mesajı Gönder",

        about_title: "HAKKIMDA",
        about_desc: "Yapay zeka geliştirme, veritabanı sistemleri, nesne yönelimli programlama, veri yönetimi ve web geliştirme alanlarında temel bilgiye sahip; öğrenmeye açık ve meraklı bir Yazılım Mühendisliği öğrencisiyim. Blockchain teknolojileri alanına özel bir ilgi duymakta ve teknik becerilerimi geliştirmek için aktif olarak projeler üretmekteyim. Dinamik bir organizasyonda araştırmacı yönümü kullanarak kendimi geliştirebileceğim ve anlamlı katkılar sağlayabileceğim fırsatlar arıyorum.",
        tech_skills: "TEKNİK UZMANLIK",
        web_dev: "Web Geliştirme",
        work_ethic: "ÇALIŞMA ETİĞİ",
        work_ethic_desc: "Her projede mükemmelliği sunmaya kararlıyım; iş akışıma sürekli olarak etik standartları ve evrensel değerleri entegre etmeye çabalıyorum."
    }
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const langSwitchCheckbox = document.getElementById('langSwitchCheckbox');
    if (langSwitchCheckbox) {
        langSwitchCheckbox.checked = (lang === 'tr');
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if(el.id === 'heroTitle'){ 
                el.setAttribute('data-text', translations[lang][key]); 
            } else { 
                el.innerHTML = translations[lang][key]; 
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) initTypingEffect(heroTitle.getAttribute('data-text'));
}

// Başlatıcı
document.addEventListener('DOMContentLoaded', () => {
    initThemeAndPanel();
    initPerformanceOptimizations(); 
    initMicroSounds(); 
    initBackground();      
    initTiltCards();
    initArticleModals();
    initSearchEngine();
    initContactForm();
    initPageTransitions(); 
    initAdminPanel(); 
    
    initLightBeams(); 
    initTheatricalScroll(); 

    fetchGitHubRepos();    
    fetchFinanceRates();   
    
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
    
    const langSwitchCheckbox = document.getElementById('langSwitchCheckbox');
    if(langSwitchCheckbox) {
        langSwitchCheckbox.addEventListener('change', (e) => {
            setLanguage(e.target.checked ? 'tr' : 'en');
        });
    }
});