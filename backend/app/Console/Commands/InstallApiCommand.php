<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class InstallApiCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    // protected $signature = 'app:install-api-command';

    /**
     * The console command description.
     *
     * @var string
     */
    // protected $description = 'Command description';
    protected $signature = 'install:api';

    // The console command description.
    protected $description = 'Install API';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('API installation logic executed.');
        return 0;
    }
}
