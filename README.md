# Smart Bills
> Split bills for your friends
> 
Smart Bills is an web application that calculates the hosts' bills based on split by dishes or split by headcount, then sends email to the hosts' friends based on the calculation.

This is a project utilizes Node.js, React.js, Axios, and Material-UI for the frontend and UI design. JavaScript, MongoDB, and Express for backend and database.

## Deployed Websites
[AWS Website](https://smartbills-aws.com/)  
[Heroku Website](https://smart-billy.herokuapp.com/)


## How to install
Add a .env in the root folder with the following
```
{
  dbKey = <mongoDB_uri>,
  jwtSecret = <any_secret>,
  SG_API_KEY = <api_key>
}
```

Install server dependencies  
```
npm i
```

Install client dependencies
```
cd client 
npm install
```
Run the Server and Client from root  
```
npm run dev
```

# Owner
[Gabriel Zhen](https://github.com/gabzn)  
[Wenxu Chen](https://github.com/WenxuC)  
[Shiyang Chen](https://github.com/channnx)

