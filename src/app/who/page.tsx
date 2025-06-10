"use client";

import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

interface FormData {
  name: string; // 姓名
  email: string; // 電子郵件
  phone: string; // 電話
  remark: string; // 備注
  academic: string; //学制
}

export default function MemberForm() {
  // 表單狀態
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    remark: "",
    academic: "",
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
      "電話: " +
      formData.phone +
      "\n" +
      "備注: " +
      formData.remark +
      "\n";
    formData.academic + "\n";
    alert("表單資料: \n" + formDataString);
  };

  return (
    // css flex: 使用 flexbox 來排版
    // justify-center: 水平置中
    // items-center: 垂直置中
    // min-h-screen: 最小高度為螢幕高度
    <div className="flex justify-center items-center min-h-screen">
      <Card title="新增聯絡人" className="w-full max-w-md">
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
            <label htmlFor="phone">電話</label>
            <InputText
              id="phone"
              type="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="remark">備注</label>
            <InputTextarea
              id="remark"
              value={formData.remark}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>身分</label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <RadioButton
                  inputId="highschool"
                  name="identity"
                  value="highschool"
                  checked={formData.academic === "highschool"}
                  onChange={(e) =>
                    setFormData({ ...formData, academic: e.value })
                  }
                />
                <label htmlFor="highschool" className="ml-2">
                  高中生
                </label>
              </div>
              <div className="flex items-center">
                <RadioButton
                  inputId="college"
                  name="identity"
                  value="college"
                  checked={formData.academic === "college"}
                  onChange={(e) =>
                    setFormData({ ...formData, academic: e.value })
                  }
                />
                <label htmlFor="college" className="ml-2">
                  大學生
                </label>
              </div>
              <div className="flex items-center">
                <RadioButton
                  inputId="primary"
                  name="identity"
                  value="primary"
                  checked={formData.academic === "primary"}
                  onChange={(e) =>
                    setFormData({ ...formData, academic: e.value })
                  }
                />
                <label htmlFor="primary" className="ml-2">
                  小學生
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
