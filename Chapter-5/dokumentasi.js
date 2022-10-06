const { Collection, Item, Header } = require("postman-collection");
const fs = require("fs");

// create collection
const postmanCollection = new Collection({
  info: {
    name: "Dokumentasi API Challenge Chapter-5",
  },
  item: [],
});

//set header
const rawHeaderString =
  "Authorization:\nContent-Type:application/json\ncache-control:no-cache\n";

const rawHeader = Header.parse(rawHeaderString);

const requestHeader = rawHeader.map((h) => new Header(h));


//create the final request auth
const authRegister = new Item({
  name: "Auth Register",
  request: {
    header: requestHeader,
    url: "http://localhost:3001/auth/register",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        username: "syifaul",
        password: "syifaul123"
      }),
    },
    auth: null,
  },
});
const authLogin = new Item({
  name: "Auth Login",
  request: {
    header: requestHeader,
    url: "http://localhost:3001/auth/login",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        username: "syifaul",
        password: "syifaul123"
      }),
    },
    auth: null,
  },
});
const authWhoami = new Item({
  name: "Auth Who Am I",
  request: {
    header: requestHeader,
    url: "http://localhost:3001/auth/whoami",
    method: "GET",
    auth: null,
  },
});
const authChangepassword = new Item({
  name: "Auth Changepassword",
  request: {
    header: requestHeader,
    url: "http://localhost:3001/auth/changepassword",
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        password: "syifaul1234"
      }),
    },
    auth: null,
  },
});
const authDelete = new Item({
  name: "Auth Delete",
  request: {
    header: requestHeader,
    url: "http://localhost:3001/auth/deleted",
    method: "DELETE",
    body: {
      mode: "raw",
      raw: JSON.stringify({
        username: "syifaul"
      }),
    },
    auth: null,
  },
});

// create final request Biodata
const bioShow = new Item({
    name: "Biodata Show All",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/bio/show",
      method: "GET",
      auth: null,
    },
  });
const bioInput = new Item({
    name: "Biodata Create",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/bio/input",
      method: "POST",
      body: {
        mode: "raw",
        raw: JSON.stringify({
          nama: "syifaul qolbi",
          email: "syifaul@mail.com"
        }),
      },
      auth: null,
    },
  });
const bioUpdate = new Item({
    name: "Biodata Update",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/bio/update",
      method: "POST",
      body: {
        mode: "raw",
        raw: JSON.stringify({
          nama: "syifaul sipaling backend",
          email: "syifasyifa32@mail.com"
        }),
      },
      auth: null,
    },
  });
const bioDelete = new Item({
    name: "Biodata Delete",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/bio/delete",
      method: "DELETE",
      body: {
        mode: "raw",
        raw: JSON.stringify({
          id: "value id"
        }),
      },
      auth: null,
    },
  });

//  create final request History
const hisShow = new Item({
    name: "History Show All",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/his/show",
      method: "GET",
      auth: null,
    },
  });
const hisInput = new Item({
    name: "History Create",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/his/input",
      method: "POST",
      body: {
        mode: "raw",
        raw: JSON.stringify({
          lamabermain: 4,
          ranking: "epig"
        }),
      },
      auth: null,
    },
  });
const hisUpdate = new Item({
    name: "History Update",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/his/update",
      method: "POST",
      body: {
        mode: "raw",
        raw: JSON.stringify({
            id: 1,
            lamabermain: 2,
            ranking: "lejen"
        }),
      },
      auth: null,
    },
  });
const hisDelete = new Item({
    name: "History Delete",
    request: {
      header: requestHeader,
      url: "http://localhost:3001/his/delete",
      method: "DELETE",
      body: {
        mode: "raw",
        raw: JSON.stringify({
          nama: "syifaul"
        }),
      },
      auth: null,
    },
  });

postmanCollection.items.add(authRegister);
postmanCollection.items.add(authLogin);
postmanCollection.items.add(authWhoami);
postmanCollection.items.add(authChangepassword);
postmanCollection.items.add(authDelete);

postmanCollection.items.add(bioShow);
postmanCollection.items.add(bioInput);
postmanCollection.items.add(bioUpdate);
postmanCollection.items.add(bioDelete);

postmanCollection.items.add(hisShow);
postmanCollection.items.add(hisInput);
postmanCollection.items.add(hisUpdate);
postmanCollection.items.add(hisDelete);

// convert to json
const collectionJSON = postmanCollection.toJSON();

//export to file
fs.writeFile("./collection.json", JSON.stringify(collectionJSON), (err) => {
  if (err) console.log(err);
  console.log("file saved");
});
