"use client";
import { useState } from "react";

// 聯絡人型別
type Contact = {
  name: string;
  phone: string;
  academic: "highschool" | "college" | "primary";
  email: string;
  note: string;
};

export default function ViewContactPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState<Contact | null>(null);

  // 模擬資料
  const contacts: Contact[] = [
    {
      name: "王小明",
      phone: "0912-345-678",
      academic: "highschool",
      email: "xiaoming@example.com",
      note: "參加過校外比賽",
    },
    {
      name: "林小美",
      phone: "0988-765-432",
      academic: "college",
      email: "xiaomei@example.com",
      note: "目前為學生會幹部",
    },
  ];

  const getIdentityLabel = (value: string) => {
    switch (value) {
      case "highschool":
        return "高中生";
      case "college":
        return "大學生";
      default:
        return "未知";
    }
  };

  const handleSearch = () => {
    const found = contacts.find((c) =>
      c.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    console.log(found);
    setResult(found || null);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        👀 檢視聯絡人
      </h1>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="🔍 請輸入姓名"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border rounded-md"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          查詢
        </button>
      </div>

      {result ? (
        <div className="bg-gray-50 p-4 border rounded-md space-y-2">
          <div>
            📝 <strong>姓名：</strong> {result.name}
          </div>
          <div>
            📞 <strong>電話：</strong> {result.phone}
          </div>
          <div>
            👥 <strong>學制：</strong> {getIdentityLabel(result.academic)}
          </div>
          <div>
            📧 <strong>電子郵件：</strong> {result.email}
          </div>
          <div>
            📝 <strong>備註：</strong> {result.note}
          </div>
        </div>
      ) : (
        searchTerm && (
          <div className="text-red-500 font-semibold">
            ❌ 找不到符合的聯絡人
          </div>
        )
      )}
    </div>
  );
}
