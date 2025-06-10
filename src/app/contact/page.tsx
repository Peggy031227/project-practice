"use client";
import { useState } from "react";

// 聯絡人資料型別
type Contact = {
  name: string;
  phone: string;
  identity: "highschool" | "college";
  email: string;
  note: string;
};

export default function ContactListPage() {
  // 模擬資料
  const [contacts] = useState<Contact[]>([
    {
      name: "王小明",
      phone: "0912-345-678",
      identity: "highschool",
      email: "xiaoming@example.com",
      note: "參加過校外比賽",
    },
    {
      name: "林小美",
      phone: "0988-765-432",
      identity: "college",
      email: "xiaomei@example.com",
      note: "目前為學生會幹部",
    },
    // 你可以在這裡新增更多聯絡人
  ]);

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

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">📋 聯絡人管理</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">📝 姓名</th>
            <th className="p-2 border">📞 電話</th>
            <th className="p-2 border">👥 學制</th>
            <th className="p-2 border">📧 電子郵件</th>
            <th className="p-2 border">📝 備註</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.phone}</td>
              <td className="p-2 border">{getIdentityLabel(c.identity)}</td>
              <td className="p-2 border">{c.email}</td>
              <td className="p-2 border">{c.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
