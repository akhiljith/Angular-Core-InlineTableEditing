﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BankAccounts.API.Models
{
    public class BankAccount
    {
        public int BankAccountID { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(20)")]
        public string AccountNumber { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string AccountHolder { get; set; }
        [Required]
        public int BankID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string iFSC { get; set; }
    }
}
