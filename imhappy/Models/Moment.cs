﻿using System;
using System.ComponentModel.DataAnnotations;

namespace imhappy.Models
{
    public class Moment
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Entry { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsSignificant { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }
    }
}
