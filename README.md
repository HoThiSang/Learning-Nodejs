## 1 Method : 
- Get: chúng ta sử dụng method get khi mà chúng ta cần nhận dữ liệu từ server gửi cho clients ( Nhận dữ liệu từ phía máy chủ đưa cho phía người sử dụng)
- POST: chúng ta sử dung method POST khi mà chúng ta muốn gửi dữ liệu từ clients tới server ( trình duyệt website gửi data tới máy chủ)

## 
Hành vi SUBMIT : Hành vi khi chúng ta bấm submit form mà trình duyệt load lại trang và đính thêm các request trên url gọi là query parameter


## Tìm hiểu về Method Post : 
- khi chúng ta gửi dữ liệu bằng form data (post) thì thằng express chưa có tích hợp sẵn nên nó sẽ undifined khi mà chúng chúng console.log(req.body); nhưng bên trình duyệt thì data  có data mà bạn gửi lên 


# app.use(express.urlencoded())
# app.use(express.json())
--> Là 2 cái chúng ta sử dụng khi mà làm tới phần middleware 

- chúng ta sử body-parser --> body-parser phụ thuộc vào thằng qs trong npm 
- qs sẽ lấy data từ form data được gửi lên gán ngược lại cho thằng req và body

## Mô hình MVC model 

Models                  Views
  -                        -
    -                    -
      -                 -
        -             -
            Controllers

- View: 
- Controller:
- Model:

# [MVC] - Routes & Controllers
- Local host ----------- Hosting 

- Action --> Dispatcher --> Function handler

Dispatcher: Là khi routes match với method nào tuyến dường là gì ví dụ http://localhost:3000/search 


- Model 