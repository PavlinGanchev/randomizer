<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    /**
     * Display a listing of all users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {    
        $users= User::all()
                ->toArray();         
        $message= self::error_message('Users not found');       
        return  self::check_response($users, $message);             
    } 

    /**
     * Display the specified resource by id of user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {        
        $user = User::find($id);
        
        $user_response=[
            $user
        ];
        $text='User with id: '. $id .' not found';  
        $message= self::error_message($text);     
        return self::check_response($user_response, $message);           
       
    }

    /**
     * Display the specified resource by counrty value.
     *
     * @param  string  $country
     * @return \Illuminate\Http\Response
     */
    public function show_by_country($country)
    {
        $users= User::where('country', $country)
                ->orderBy('first_name', 'desc')               
                ->get()
                ->toArray(); 
        $text='User form '. $country .' does not exist';           
        $message= self::error_message($text);     
        return self::check_response($users, $message);  
    }

    /**
     * Display all available counrties.
     *    
     * @return \Illuminate\Http\Response
     */
    public function get_all_countries()
    {
        $countries= User::orderBy('country', 'asc')
                    ->pluck('country')
                    ->unique()
                    ->values()
                    ->prepend('All')                    
                    ->all();                 
        $text='There are no countries';           
        $message= self::error_message($text);     
        return self::check_response($countries, $message);  
    }

    /**
     * Display the specified message
     *
     * @param  string  $message
     * @return Array with message
     */
    private function error_message($message){

      return $error_response=[
            'message' => $message
        ]; 
    }



    /**
     * Display the specified resource by counrty value.
     *
     * @param  string  $response_data
     * @param  array  $error_message
     * @return \Illuminate\Http\Response
     */
    private function check_response($response_data, $error_message){

        if (empty($response_data)) {
            return response()->json( $error_message ); 
        }    
        return response()->json($response_data);
    }
    
}
