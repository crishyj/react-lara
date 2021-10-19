<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;

class ExpenseController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function index(){
        $expenses = Expense::all();
        return response()->json($expenses);
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'amount' => 'required',
            'description' => 'required'
        ]);

        $options = new Expense([
            'name' => $request['name'],
            'amount' => $request['amount'],
            'description' => $request['description'],
        ]);

        $options->save();

        $expenses = Expense::all();
        // $expense = Expense::create($request->all());
        return response()->json([
            'code' => 200, 
            'message' => 'expense created', 
            'expense' => $expenses 
        ]);
    }

    public function show($id){
        $expense = Expense::find($id);
        return $expense;
    }

    public function update(Request $request, $id){
        $request->validate([
            'name' => 'required',
            'amount' => 'required',
            'description' => 'required'
        ]);

        $expense = Expense::find($id);

        $expense->name = $request['name'];
        $expense->amount = $request['amount'];
        $expense->description = $request['description'];
        $expense->save();

        return response()->json([
            'message' => 'expense updated',
            'expense' => $expense
        ]);
    }

    public function destroy($id){
        $expense = Expense::find($id);
        $expense->delete(); 
        $expenses = Expense::all();
        return response()->json([
            'message' => 'expense deleted',
            'expense' => $expenses 
        ]);
    }
}
