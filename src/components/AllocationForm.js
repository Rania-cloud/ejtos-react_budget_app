export default AllocationForm;


  {
                        /* Add Budget component here */
                    }
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    {
                        /* Add Remaining component here*/
                    }
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    {
                        /* Add ExpenseTotal component here */
                    }
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    {
                        /* Add ExpenseList component here */
                    }
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row '>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                    {
                        /* Add ExpenseItem component here */
                    }
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                    {
                        /* Add AllocationForm component here under */
                    }

                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>

