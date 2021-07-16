﻿using System.ComponentModel.DataAnnotations;

namespace imhappy.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Emoji { get; set; }
    }
}
