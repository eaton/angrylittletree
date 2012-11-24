--- 
layout: post
lj_post: TRUE
title: It gets more complicated, see...
tags: []

drupal_path: it-gets-more-complicated-see
drupal_nid: 962
created: 1024496640
---
<pre>
<small>
<bold>// CS 217, 6-19-2002 Lab
// Jeff Eaton
// verb@predicate.net</bold>

import javax.swing.*;

public class lec1Lab {
   public static void main(String s[]){

      String strTemp; //temporary holding bin for user input

      String strName = ""; //name string
      int iEmpID = -1; //employee ID
      double dblCurSal= 0; //current salary
      double dblNewSal = 0; //new salary
      boolean bError = true; //Ye olde generic error catching bool.

      //Prompt for Employee name, no error checking
      strName = JOptionPane.showInputDialog("Employee Name");


      //Prompt for Employee ID, check for range errors.
            while (bError == true){
         strTemp = JOptionPane.showInputDialog("Employee ID");
         iEmpID = Integer.parseInt(strTemp);
         if (iEmpID < 0 || iEmpID > 1000) {
            JOptionPane.showMessageDialog(null, "Employee ID out of range.\n" +
                                                "Enter an employee ID between 1 and 1000.");
         }
         else { bError = false; }
      }
      bError = true; //reset the check.


      //Prompt for current salary, check for positive double.
        while (bError == true){
         strTemp = JOptionPane.showInputDialog("Current Salary");
         dblCurSal = Double.parseDouble(strTemp);
         if (dblCurSal < 0) {
            JOptionPane.showMessageDialog(null, "Current salary is negative.\n" +
                                                "Enter a positive number.");
         }
         else { bError = false; }
      }
      bError = true; //reset the check.


      //Prompt for Employee ID, check for positive double.
        while (bError == true){
         strTemp = JOptionPane.showInputDialog("New Salary");
         dblNewSal = Double.parseDouble(strTemp);
         if (dblNewSal < 0) {
            JOptionPane.showMessageDialog(null, "New salary is negative.\n" +
                                                "Enter a positive number.");
         }
         else { bError = false; }
      }
      bError = true; //reset the check.


      //Splat all the data together and throw it into a message dialog.
      strTemp =           "Employee Name: " + strName + "\n";
      strTemp = strTemp + "Employee ID: " + iEmpID + "\n";
      strTemp = strTemp + "Current Salary: " + dblCurSal + "\n";
      strTemp = strTemp + "New Salary: " + dblNewSal + "\n";

      JOptionPane.showMessageDialog(null, strTemp);

      System.exit(0);

   } //end main
} //end class
</small>
</pre>
