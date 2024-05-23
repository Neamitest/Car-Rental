<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        return  response()->json([

            'message' => $request->expectsJson(),
         ], 401);
        if ($request->expectsJson()) {
            return $next($request);
        }else{
            return  response()->json([

               'message' => 'Unauthenticatedd',
            ], 401);

        }
    }
}
