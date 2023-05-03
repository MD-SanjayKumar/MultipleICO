const express = require('express');
const app = express();
const path = require('path');
const port = '9090';
var { graphql, buildSchema } = require("graphql");


app.get("/idea", async(req, res)=>{
    async function fetchGraphQL(operationsDoc, operationName, variables) {
        const result = await fetch(
          "https://indexer-testnet.staging.gcp.aptosdev.com/v1/graphql",
          {
            method: "POST",
            body: JSON.stringify({
              query: operationsDoc,
              variables: variables,
              operationName: operationName
            })
          }
        );
        return await result.json();
      }
      
      const operationsDoc = `
        query MyQuery {
          current_table_items(where: {table_handle: {_eq: "0xd36821f9ab549a11fe742ce27da14b8d41468d32fc7ad886a79b04b2004db41c"}}) {
            decoded_key
            decoded_value
          }
        }
      `;
      
      function fetchMyQuery() {
        return fetchGraphQL(
          operationsDoc,
          "MyQuery",
          {}
        );
      }
      
      async function startFetchMyQuery() {
        const { errors, data } = await fetchMyQuery();
        if (errors) {
          // handle those errors like a pro
          console.error(errors);
        }
      
        // do something great with this precious data

        // for (var i in data.current_table_items)
        // {
        //   console.log('---------');
        //   console.log(i);
        //   console.log(data.current_table_items[i]);
        //   console.log('---------');
        // }
        for (var i in data.current_table_items){
          console.log(data.current_table_items[i]);
          console.log(i);
        }
        // console.log(data);
        // console.log(data.current_table_items.length);
        // console.log(data.current_table_items[0].decoded_value);
      }
      startFetchMyQuery();
})

app.get("/", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "home.html"));
})

app.get("/create", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "create_ico.html"));
})

app.get("/register", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "register_ico.html"));
})

app.get("/ico", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "reg.html"));
})

app.get("/ico/dash", async(req, res)=>{
  console.log(process.env.RES_ADDR);
  res.sendFile(path.join(__dirname, "html", "dashboard.html"));
})

app.get("/ico/admin", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "admin.html"));
})

app.get("/ico/admin/freeze", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "restrict.html"));
})

app.get("/ico/admin/rate", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "new_rate.html"));
})

app.get("/ico/admin/change", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "change_admin.html"));
})

app.get("/ico/admin/start", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "stime.html"));
})

app.get("/ico/admin/end", async(req, res)=>{
  res.sendFile(path.join(__dirname, "html", "etime.html"));
})

app.listen(port, async(req, res)=>{
    console.log(`Listening to port ${port}`);
})