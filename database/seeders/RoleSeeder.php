<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Amir\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::firstOrCreate(['name' => 'System Admin']);
        Role::firstOrCreate(['name' => 'Company']);
        Role::firstOrCreate(['name' => 'User']);
    }
}
