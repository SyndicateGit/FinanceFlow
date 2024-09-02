import Home from "@/public/icons/home.svg";
import Accounts from "@/public/icons/accounts.svg";
import TransactionHistory from "@/public/icons/transaction-history.svg";
import Statistics from "@/public/icons/statistics.svg";
import CreateTransaction from "@/public/icons/create-transaction.svg";
import TransferFunds from "@/public/icons/transfer-funds.svg";
import Banks from "@/public/icons/banks.svg";

export const sidebarLinks = [
  {
    imageUrl: Home,
    route: "/",
    label: "Home",
  },
  {
    imageUrl: Banks,
    route: "/banks",
    label: "Banks",
  },
  {
    imageUrl: TransactionHistory,
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imageUrl: Statistics,
    route: "/statistics",
    label: "Statistics",
  },
  {
    imageUrl: CreateTransaction,
    route: "/create-transaction",
    label: "Create Transaction"
  },
  {
    imageUrl: TransferFunds,
    route: "/transfer-funds",
    label: "Transfer Funds",
  },
];