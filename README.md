# WAITFORME
React Project
-- 更改部分說明


版本為 11/11 

github commit version log :  

4b84100326621a77eac0cf956b9b5c36ea63c8c3

--server side 

index.js 

//奕捷新增

 增加env和menu資料庫，並且接收來自前端的id請求，返回資料庫資料

app.get("/store/env", function (request, response) {
  id = request.query.id;
  conn.query(
    "select * from env where id = ? ;", [id], (err, result) => {
      console.log(result);
      response.send(result);
    }
  )
})
app.get("/store/menu", function (request, response) {
  id = request.query.id;
  conn.query(
    "select * from menu where id = ? ;", [id], (err, result) => {
      // console.log(result);
      response.send(result);
    }
  )
})

--clinet side

src - minmin - storelistfather.jsx

//奕捷新增 

新增兩個get function method ，並且要加入useEffect進行呼叫


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

接下來就是將 env 和 menu 取得並存入的數值傳入storelist -> bookmark -> 分別對應的 env component 及 menu component , 再將值顯示出來。

並附上 env 和 menu 資料庫的指令 ，相關引用假資料的圖片在

https://drive.google.com/drive/folders/1w-UR3Gft8tW-XToeJE0s9t64M6Yp6qYA

隻隻隻策會大專--奕截資料夾內


menu -- 

create table menu (
id int(255)  NOT NULL,
img_id int(255) NOT NULL,
img_path varchar(255) NOT NULL,
img_description varchar(255), 
PRIMARY KEY (id,menu_img_id) 
)
-- 1 小葛廚房
-- 2 一笈壽司
-- 3 莓塔咖啡館
-- 4 Mabao嬤寶

INSERT INTO menu (id,img_id,img_path,img_description) VALUES
(1,1,'./images/storemenu/store1/menu01.jpg','飲料菜單'),
(1,2,'./images/storemenu/store1/menu02.jpg','全菜單'),
(1,3,'./images/storemenu/store1/menu03.jpg','牆上菜單'),
(2,1,'./images/storemenu/store2/menu01.jpg','主食系列'),
(2,2,'./images/storemenu/store2/menu02.jpg','單點系列'),
(2,3,'./images/storemenu/store2/menu03.jpg','全部菜單'),
(3,1,'./images/storemenu/store3/menu01.jpg','主食菜單'),
(3,2,'./images/storemenu/store3/menu02.jpg','甜點預訂菜單'),
(3,3,'./images/storemenu/store3/menu03.jpg','雙人下午茶套餐組'),
(4,1,'./images/storemenu/store4','無菜單');


env -- 

create table env(
id int(255) PRIMARY KEY  NOT NULL,
customer_base VARCHAR(50)  ,
  parking VARCHAR(100)  ,
  pay_method VARCHAR(30)  ,
  minimum_order VARCHAR (30)   ,    
  service_charge varchar(10)  ,
  cigarette varchar(5)  
);

-- 1 小葛廚房
-- 2 一笈壽司
-- 3 莓塔咖啡館
-- 4 Mabao嬤寶

INSERT INTO env (id,customer_base,parking,pay_method,minimum_order,service_charge,cigarette)
VALUES
(1,'小資族、親子聚餐','無專屬停車位','現金','至少一杯飲料或是一份餐點','無服務費','不可吸菸'),
(2,'公司聚會、家庭聚餐','無專屬停車位','現金、刷卡','無低消','無服務費','不可吸菸'),
(3,'情侶約會、學生聚會','無專屬停車位','現金、刷卡','至少一杯飲料','無服務費','不可吸菸'),
(4,'伴手禮品',null,'線上購物',null,null,null)



