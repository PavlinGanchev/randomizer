# Description

Laravel 5.4 / Angular environment for development.

# Installation and configuration steps

### Dependencies

Working environment requires installation of:

 * [Git(latest)](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 * [NodeJS(the last stable version)](https://nodejs.org/en/)
 * [NGINX](https://www.nginx.com/resources/wiki/) or [Apache](https://www.apache.org/)
 * [PHP(>= v5.6.19)](http://php.net)
 * [MySQL](https://www.mysql.com/)
 * [Composer](https://getcomposer.org/)
 * [Angular CLI](https://cli.angular.io/)

> For big part of junior developers installation of PHP, MySQL, NGINX/Apache is more complicated.
> The easies way is using of [XAMPP](https://www.apachefriends.org/index.html) with already integrated PHP, MySQL and Apache as webserver.
> Experienced **UNIX** developers can use for installation of PHP, MySQL, NGINX/Apache the tutorials provided from Digital Ocean:
> [LAMP(using Apache as webserver) for Linux](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu) /
> [LEMP(using NGINX as webserver) for Linux](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04) /
> [MAMP(using Apache as webserver) for Mac](https://jason.pureconcepts.net/2012/10/install-apache-php-mysql-mac-os-x/)

### Main installation steps

 * Creation of local database
 * Copying .env.example  to .env and filling in the information about the environment
 * Running the follow commands:

  ```sh
  $ git clone git@github.com:iliyailiev/premo.development.task.git [preferred directory]
  $ composer install
  $ php artisan migrate
  $ npm install
  ```

 * Creation of virtual host (depends from webserver type)

   - [HOW TO for Linux using Apache](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts)
   - [HOW TO for Mac using Apache](https://coolestguidesontheplanet.com/set-virtual-hosts-apache-mac-osx-10-9-mavericks-osx-10-8-mountain-lion/)
   - [HOW TO for XAMPP using Apache](https://delanomaloney.com/2013/07/10/how-to-set-up-virtual-hosts-using-xampp/)
   - [HOW TO for Linux using NGINX](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts)
   - [HOW TO for Mac using NGINX](http://learnaholic.me/2012/10/10/installing-nginx-in-mac-os-x-mountain-lion/)

### Starting environment and compiling the code

  ```sh
  $ ng build
  $ ng build --watch
  ```
> For more information [Angular CLI](https://github.com/angular/angular-cli/wiki)

# Task

Fill the database with 100 dummy users ( first_name, last_name, email, password, country)

The task is to build a randomizer that can draw winners based on their location. You should be able to
set a number of winners and a period of drawing a winner. Then start the randomizer and the winners should
be displayed below as a list.

Randomizer:
- Define number of winners - via input field
- Select - All countries / Chosen country
- Define a period of drawing a winner (in minutes) - via input field
- Click the Draw Winners button and the randomizer starts drawing winners (Displayed a list of winner below the filters and button)

All functionality should be implemented in Angular using:
- Service to provide the information about all users via API (Laravel)
- Directive to show a winner
- View to show information about single winner (Using Router - @angular/router)

Laravel should be used to store and provide information:
- User model
- RestFULL controller
- No Need of CSRF verification
- Communication via JSON
