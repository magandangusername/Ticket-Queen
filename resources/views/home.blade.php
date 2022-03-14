@extends('layouts.app')

@section('content')
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width-device-width, initial-scale=1.0">

  <title>Dashboard | Inventory Manager</title>
  <link rel="stylesheet" href="css/bootstrap.css">
  <script src="js/bootstrap.js"></script>
</head>

<style>
  .container {
    background: #8CB743;
    text-align: center;
    color: white;
    padding-top: 10px;
    height: 35px;
    width: 500px;
  }

  .green-box {
    float: left;
    margin-left: 200px;
    
    
  }

  .warning{
    float: left;
    margin-left: 200px;
    width: 500px;
  }
  
  .news{
    float: right;
    margin-right: 350px;
  }

  .button-box {
    float: right;
    margin-right: 650px;
  }

  .align-items-end {
    background: #c3d491;
    text-align: center;
    margin-left: 0px;
    height: 140px;
    width: 500px;

  }
.under{
  clear: both;
}

  .rem {
    background: red;

  }

  .warn {
    background: pink;
    color: red;

  }
</style>

<body>
 
  <div class="green-box">
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <center><b>Your Account Benefits</b></center>
        </div>
      </div>
    </div>

    <div class="row align-items-end">
      <div class="col">
        <b>As a reliable seller, you get access to a number of exclusive benefits</b>
      </div>

      <div class="row">

            <div class="col">
              Listings stay active closer to the event

              <br>"I have shipped" function

              <br>Enhanced version of "Recently Added Events" (coming soon)
            </div>

            <div class="col">
              Ability to self-extend shipping deadlines

              <br>Dynamic pricing tools

              <br>Preffered supplier for corporate orders
            </div>

      </div>
    </div>
  </div>

  </div>
  <div class="button-box">
      <button type="button" class="btn btn-light">Listings</button>
      <br>
      <button type="button" class="btn btn-light">Sales</button>
      <br>
      <button type="button" class="btn btn-light">Last Minute Sales</button>
      <br>
      <button type="button" class="btn btn-light">Reports</button>
      <br>
      <button type="button" class="btn btn-light">Settings</button>
      <br>
      <button type="button" class="btn btn-light">Market Research</button>
      <br>
      <button type="button" class="btn btn-light">Messages</button>
      <br>
      <br>
      
      <button type="button" class="btn btn-light">Log Out</button>
  </div>


  <br>
  <br>
  <br>
<div class ="under">
  <div class="warning">
    <div class="row">
      
      <div class="col warn">
        If your failure rate is above 1% this month you will face an additional charge per ticket, per failed order and
        additionally, lose account benefits. <a href="">Click here</a> for more details and your account performance
        data
      </div>
      <p>Recently Added Events has moved <a href="">here</a></p>
      <div class="col">
      </div>
    </div>
  </div>  
</div>
  <div class="news">
  <p>
    <b>News</b>
    <br>
    If you need to call Seller Support and are prompted to enter a code, please enter: 4646.
    <br>
    <a href="">Click here</a> to view the viagogo Seller Tools Terms of Use.

  </p>
  </div> 
</div>
</body>

</html>
@endsection
