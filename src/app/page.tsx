"use client";

import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

interface FormData {
  name: string; // 姓名
  email: string; // 電子郵件
  password: string; // 密碼
  gender: string; // 性別
}

export default function MemberForm() {
  // 表單狀態
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  // 處理表單提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataString =
      "姓名: " +
      formData.name +
      "\n" +
      "電子郵件: " +
      formData.email +
      "\n" +
      "密碼: " +
      formData.password +
      "\n" +
      "性別: " +
      formData.gender +
      "\n";
    alert("表單資料: \n" + formDataString);
  };

  return (
    // css flex: 使用 flexbox 來排版
    // justify-center: 水平置中
    // items-center: 垂直置中
    // min-h-screen: 最小高度為螢幕高度
    <div className="flex justify-center items-center min-h-screen">
      <Card title="會員註冊" className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">姓名</label>
            <InputText
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">電子郵件</label>
            <InputText
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">密碼</label>
            <InputText
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>性別</label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <RadioButton
                  inputId="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.value })
                  }
                />
                <label htmlFor="male" className="ml-2">
                  男性
                </label>
              </div>
              <div className="flex items-center">
                <RadioButton
                  inputId="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.value })
                  }
                />
                <label htmlFor="female" className="ml-2">
                  女性
                </label>
              </div>
            </div>
          </div>
          <Button type="submit" label="註冊" className="mt-4" />
        </form>
      </Card>
    </div>
  );
}
