import React, { useState, useEffect } from "react";
import Storelist from "./storelist";
import Axios from "axios";

function FakeDetail({ match }) {
  //match 要從<Route component{<>}進來才會有值
  useEffect(() => {
    fetchData();
    getMenu();
    getEnv();
    // console.log(match);
  }, []);

  const [data, setData] = useState("");

  const fetchData = async () => {
    const rep = await fetch(
      `http://localhost:3001/page3?id=${match.params.id}`
    );
    //得到rep物件
    const data = await rep.json(); //默認rep物件裡的data去轉//axios不用轉
    setData(data);

  };
  // console.log(data); //先空再有陣列
  // 奕捷新增
  const [env, setEnv] = useState("");
  const getEnv = async () => {
    try {
      const response = await Axios.get(`http://localhost:3001/store/env/?id=${match.params.id}`);
      const env = await response.data;
      console.log(env);
      setEnv(env);
    } catch (err) {
      // console.log(err);
    }
  };
  const [menu, setMenu] = useState("");
  const getMenu = async () => {
    try {
      const response = await Axios.get(`http://localhost:3001/store/menu/?id=${match.params.id}`);
      const menu = await response.data;
      console.log(menu);
      setMenu(menu);
    } catch (err) {
      // console.log(err);
    }
  };

  if (data !== "") {
    //這裡不能用trycatch所以用這個方法
    return (
      <div>
        <Storelist data={data} env={env} menu={menu} />
      </div>
    );
  } else {
    return <></>;
  };

}

export default FakeDetail;
