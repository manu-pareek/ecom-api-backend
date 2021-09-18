
# ECOM-API's 

This project is fully functional Ecom-API with all functionalities like
- User role authentication and Login/Register Functionality using JWT token 
- Register Users,Suppliers,Admins
- Supplier can Register and only Get verified By Admins
- User can Browse Products, add orders and items into cart.
- Password Protection using bcryptjs




## API Reference
#### Register

```http
  POST /api/register/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` |Details Like Name,Email and Password |
| `supplier` | `string` | Details Like Name,Email and Password |
| `admin` | `string` |Details Like Name,Email and Password |

#### Login
```http
  GET /api/login/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` |Email and Password |
| `supplier` | `string` |Email and Password |
| `admin` | `string` |Email and Password |

* NOTE :- When you Login, You will be Provided Token, Always use it in Headers-Authorization for performing further operations!

#### Verify Supplier
```http
  GET /api/verify/supplier/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `{id}` | `string` |Supplier id to be verified by Admin |

* NOTE :- Only Admin will be allowed to verify the supplier!

#### Product
```http
  GET /api/product/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `getall` | `string` | Admin/User Gets to fetch all Products on database and Supplier Gets to See Products added by Him! |

```http
  POST /api/product/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `add` | `string` | Name,Price,Description,Image to be sent|

* NOTE :-Only Admin/Supplier will be able to add Products!

#### Cart

```http
  POST /api/cart/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `add` | `string` | Product ID's array to be sent |

```http
  GET /api/cart/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `all` | `string` |Fetches All Cart Collection for Admin and User added items for Users |

* NOTE :-Only User will be able to add Products in Cart!

#### Order

```http
  POST /api/order/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `string` |Products ID array to place and order |
 * Note :- Only User will be able to Place order!

## Tech Stack

**Server:** Node, Express

**DataBase:** MongoDB

**Authentication:** JWT

**Password Security:** bcryptjs


  
## Authors

- [Manu Pareek](https://github.com/manu-pareek)

  