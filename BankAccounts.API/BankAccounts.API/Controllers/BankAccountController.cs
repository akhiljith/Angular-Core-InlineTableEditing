using BankAccounts.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BankAccounts.API.Controllers
{
    [Route("api/BankAccount")]
    [ApiController]
    public class BankAccountController : ControllerBase
    {
        public APIDBContext _context;
        public BankAccountController(APIDBContext context)
        {
            _context = context;
        }
        // GET: api/<BankAccountController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BankAccount>>> Get()
        {
            return await _context.BankAccounts.ToListAsync();
        }

        // GET api/<BankAccountController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BankAccount>> Get(int id)
        {
            return await _context.BankAccounts.FindAsync(id);
        }

        // POST api/<BankAccountController>
        [HttpPost]
        public async Task<ActionResult<BankAccount>> Post(BankAccount bankAccount)
        {
            try
            {
                _context.BankAccounts.Add(bankAccount);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { id = bankAccount.BankAccountID }, bankAccount);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        // PUT api/<BankAccountController>/5
        [HttpPut]
        public async Task<ActionResult<BankAccount>> Put(BankAccount bankAccount)
        {
            try
            {
                _context.Entry(bankAccount).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { id = bankAccount.BankAccountID });
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        // DELETE api/<BankAccountController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
