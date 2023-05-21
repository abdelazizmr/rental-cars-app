<?php

namespace App\Http\Controllers;

use App\Models\Rent;
use Illuminate\Http\Request;

class RentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Assuming the $id parameter is the user ID
        return Rent::all();

     
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'rental_date' => 'required|date',
            'return_date' => 'required|date',
            'price' => 'required|numeric',
            'user_id' => 'required|exists:users,id',
            'car_id' => 'required|exists:cars,id',
        ]);

        $rental = new Rent();
        $rental->rental_date = $request->rental_date;
        $rental->return_date = $request->return_date;
        $rental->price = $request->price;
        $rental->user_id = $request->user_id;
        $rental->car_id = $request->car_id;
        $rental->save();

        return response($rental);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Rent::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $fields = $request->validate([
            'rental_date' => 'required|date',
            'return_date' => 'required|date',
            'price' => 'required|numeric',
            'user_id' => 'required|exists:users,id',
            'car_id' => 'required|exists:cars,id',
        ]);
        if(!$fields){
            return ['message' => 'not valid fields to update'];
        }

        $rent = Rent::find($id);
        $rent->update($fields);

        return $rent;
        

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $rent = Rent::find($id);
        if(!$rent) {
            return ['message' => 'rent dont exist'];
        }
        return $rent->delete();
    }

    /**
     * Show list of rents for a user
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function myRents($id)
    {
        // Assuming the $id parameter is the user ID
        $rents = Rent::where('user_id', $id)->get();
        $results = [];
        foreach($rents as $rent){
            $obj  = [
                'id' => $rent->id,
                'car_id' => $rent->cars->id,
                'brand' => $rent->cars->brand,
                'model' => $rent->cars->model,
                'photo' => $rent->cars->photo1,
                'fuel_type' => $rent->cars->fuel_type,
                'price' => $rent->price,
                'rental_date' => $rent->rental_date,
                'return_date' => $rent->return_date,
            ];

            $results[] = $obj;
        }

        return $results;
    }


    /**
     * Show form to edit a rent 
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editRent($id)
    {
        // Assuming the $id parameter is the user ID
        $rent = Rent::find($id);
  
        $obj  = [
            'id' => $rent->id,
            'brand' => $rent->cars->brand,
            'rental_date' => $rent->rental_date,
            'return_date' => $rent->return_date,
        ];
  
        return $obj;
    }
}
