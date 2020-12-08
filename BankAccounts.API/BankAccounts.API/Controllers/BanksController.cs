using BankAccounts.API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BankAccounts.API.Controllers
{
    [Route("api/Banks")]
    [ApiController]
    public class BanksController : ControllerBase
    {
        public APIDBContext _context;
        public BanksController(APIDBContext context)
        {
            _context = context;
        }
        // GET: api/<BanksController>
        [HttpGet]
        public IEnumerable<Bank> Get()
        {
            return _context.Banks;
        }

        // GET api/<BanksController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BanksController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<BanksController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BanksController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
