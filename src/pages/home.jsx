import React, { useState, useEffect } from "react";
import { FaMoneyBill, FaFolderOpen } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    // Load user from localStorage (default name if none)
    const userName = JSON.parse(localStorage.getItem("user")) || { name: "User" };

    // States
    const [balance, setBalance] = useState(
        parseFloat(localStorage.getItem("balance")) || 0
    );
    const [transactions, setTransactions] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );
    const [message, setMessage] = useState("");

    // Save balance and transactions to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("balance", balance);
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [balance, transactions]);

    // Handle deposit
    const handleDeposit = (e) => {
        e.preventDefault();
        const amount = parseFloat(e.target.amount.value);
        const description = e.target.description.value;

        if (!amount || amount <= 0) return;

        setBalance(balance + amount);
        setTransactions([
            ...transactions,
            {
                type: "deposit",
                amount,
                description,
                date: new Date().toLocaleString(),
            },
        ]);

        setMessage(`You deposited $${amount} into your account.`);
        setTimeout(() => setMessage(""), 5000);

        e.target.reset();
    };

    // Handle withdrawal
    const handleWithdrawal = (e) => {
        e.preventDefault();
        const amount = parseFloat(e.target.amount.value);
        const description = e.target.description.value;

        if (!amount || amount <= 0) return;

        setBalance(balance - amount);
        setTransactions([
            ...transactions,
            {
                type: "withdrawal",
                amount,
                description,
                date: new Date().toLocaleString(),
            },
        ]);

        setMessage(`You withdrew $${amount} from your account.`);
        setTimeout(() => setMessage(""), 5000);

        e.target.reset();
    };

    // Clear all transactions
    const handleClearTransactions = () => {
        if (window.confirm("Are you sure you want to clear all transaction history?")) {
            setTransactions([]);
            setMessage("Transaction history cleared.");
            setTimeout(() => setMessage(""), 5000);
        }
    };

    return (
        <div className="app">
            {/* Glow Effects */}
            <div className="top">
                <span className="glow"></span>
                <span className="glow-secondary"></span>
            </div>

            <div className="container">
                {/* Sidebar */}
                <button
                    className="glass-back-btn"
                    onClick={() => navigate("/dashboard")}
                    aria-label="Back to Dashboard"
                >
                    ←
                </button>

                <aside className="sidebar">
                    <h2 style={{ color: "white" }}>Manage Your Account</h2>

                    <form onSubmit={handleDeposit}>
                        <h3 style={{ color: "white" }}>Deposit</h3>
                        <input type="number" placeholder="Deposit Amount" name="amount" />
                        <textarea placeholder="Description..." name="description"></textarea>
                        <button className="deposit-btn" type="submit">
                            Deposit Funds
                        </button>
                    </form>

                    <form onSubmit={handleWithdrawal}>
                        <h3 style={{ color: "white" }}>Withdrawal</h3>
                        <input type="number" placeholder="Withdraw Amount" name="amount" />
                        <textarea placeholder="Description..." name="description"></textarea>
                        <button className="withdraw-btn" type="submit">
                            Withdraw Funds
                        </button>
                    </form>

                    <button className="clear-btn" onClick={handleClearTransactions}>
                        Clear Transaction History
                    </button>
                </aside>

                {/* Main Section */}
                <div className="main">
                    {/* Main Header */}
                    <div className="main-header">
                        <div className="balance">
                            <p>
                                <FaMoneyBill /> Your current balance is:
                            </p>
                            <h1>${balance.toLocaleString()}</h1>
                        </div>

                        {message && (
                            <div className="message">
                                <p>{message}</p>
                            </div>
                        )}
                    </div>

                    {/* Transactions */}
                    <div className="transactions">
                        {transactions.length > 0 ? (
                            transactions.map((t, i) => (
                                <div key={i} className={`transaction-box ${t.type}`}>
                                    <h2>{t.type === "deposit" ? "Deposit" : "Withdrawal"}</h2>
                                    <p>
                                        {t.type === "deposit" ? "+" : "-"} {t.amount} $
                                    </p>
                                    {t.description && <p>Payment Description: {t.description}</p>}
                                    <p className="date">{t.date}</p>
                                </div>
                            ))
                        ) : (
                            <p className="no-transaction">
                                <span>
                                    <FaFolderOpen />
                                </span>
                                No transactions found.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
