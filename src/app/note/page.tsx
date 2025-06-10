"use client";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";

interface Item {
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
  [key: string]: string | number;
}

export default function OrderForm() {
  const [items, setItems] = useState<Item[]>([
    { name: "", quantity: 1, price: 0, subtotal: 0 },
  ]);
  const [total, setTotal] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // ✅ 只在 items 更新後計算 total，不要再 setItems
  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.subtotal, 0);
    setTotal(newTotal);
  }, [items]);

  // ✅ 在這裡直接計算小計，避免放到 useEffect 中
  const updateItem = (index: number, field: keyof Item, value: any) => {
    const newItems = [...items];
    newItems[index][field] = value;

    const quantity = Number(newItems[index].quantity) || 0;
    const price = Number(newItems[index].price) || 0;
    newItems[index].subtotal = quantity * price;

    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: 1, price: 0, subtotal: 0 }]);
  };

  const submitOrder = () => {
    setSubmitted(true);
  };

  return (
    <Card title="📋 訂單填寫表單" className="shadow-md bg-white p-4">
      {!submitted ? (
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 gap-4 items-center border-b pb-2"
            >
              <InputText
                placeholder="📦 品名"
                value={item.name}
                onChange={(e) => updateItem(idx, "name", e.target.value)}
              />
              <InputNumber
                placeholder="🔢 數量"
                value={item.quantity}
                min={0}
                onValueChange={(e) =>
                  updateItem(idx, "quantity", Number(e.value) || 0)
                }
              />
              <InputNumber
                placeholder="💰 單價"
                value={item.price}
                min={0}
                onValueChange={(e) =>
                  updateItem(idx, "price", Number(e.value) || 0)
                }
              />
              <div className="text-green-600 font-semibold">
                📊 小計：${item.subtotal.toFixed(2)}
              </div>
            </div>
          ))}
          <Button label="➕ 新增一筆" onClick={addItem} className="mt-2" />
          <div className="text-xl font-bold text-right text-blue-700 mt-4">
            💵 總計：${total.toFixed(2)}
          </div>
          <Button
            label="📤 送出訂單"
            onClick={submitOrder}
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded"
          />
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">📋 訂單明細</h3>
          <ul className="text-sm font-mono">
            {items.map((item, index) =>
              item.quantity > 0 ? (
                <li key={index}>
                  {item.name} ｜ 數量：{item.quantity} ｜ 單價：${item.price} ｜
                  小計：$
                  {item.subtotal.toFixed(2)}
                </li>
              ) : null
            )}
          </ul>
          <div className="text-xl font-bold text-right text-green-700">
            💵 總計：${total.toFixed(2)}
          </div>
        </div>
      )}
    </Card>
  );
}
