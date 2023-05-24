<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rent Facture</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        
        span.label {
            font-weight: bold;
            display: block;
            margin-bottom: 10px;
        }
        
        img.car-photo {
            border: 1px solid #ccc;
            border-radius: 4px;
            object-fit: cover;
            width: 200px;
            height: 200px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Rent Facture</h1>
    
    <div>
        <span style="font-weight: bold;">ID:</span>
        <span>{{ $obj['id'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Car ID:</span>
        <span>{{ $obj['car_id'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Brand:</span>
        <span>{{ $obj['brand'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Price:</span>
        <span>{{ $obj['price'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Photo:</span>
        <img src="./images/{{ $obj['photo'] }}" alt="Car Photo">
    </div>
    
    <div>
        <span style="font-weight: bold;">Fuel Type:</span>
        <span>{{ $obj['fuel_type'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">User ID:</span>
        <span>{{ $obj['user_id'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Firstname:</span>
        <span>{{ $obj['firstname'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Telephone:</span>
        <span>{{ $obj['telephone'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Total:</span>
        <span>{{ $obj['total'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Rental Date:</span>
        <span>{{ $obj['rental_date'] }}</span>
    </div>
    
    <div>
        <span style="font-weight: bold;">Return Date:</span>
        <span>{{ $obj['return_date'] }}</span>
    </div>
</body>
</html>
