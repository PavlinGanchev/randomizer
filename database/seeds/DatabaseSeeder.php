<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $faker = Faker::create();
    	foreach (range(1,100) as $index) {
	        DB::table('users')->insert([
	            'first_name' => $faker->firstName,
	            'last_name' => $faker->lastName,
	            'email' => $faker->email,
	            'password' => bcrypt('secret'),
	            'country' => $faker->country,
	        ]);
        }
    }
}
