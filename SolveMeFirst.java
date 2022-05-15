//Complete the function solveMeFirst to compute the sum of two integers.
//
//Example
//a = 7
//b = 3
//Return 10.
//
//Function Description
//
//Complete the solveMeFirst function in the editor below.
//
//solveMeFirst has the following parameters:
//
//int a: the first value
//int b: the second value
//Returns
//- int: the sum of  and 
//Constraints:
//1<=a,b<=1000

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class SolveMeFirst {


    static int solveMeFirst(int a, int b) {
      	// Hint: Type return a+b; below 
          if((a>=1 && a <= 1000) && (b>=1 && b <= 1000)){
            return a+b;
          }else{
              return 0;
          }
          
   }

 public static void main(String[] args) {
        try{
            Scanner in = new Scanner(System.in);
            int a;
            a = in.nextInt();
            int b;
            b = in.nextInt();
            int sum;
            sum = solveMeFirst(a, b);
            System.out.println(sum);
        }
        catch (Exception e){
            System.out.println("ERROR");
        }
   }
}
