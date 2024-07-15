using System.ComponentModel.DataAnnotations;

namespace AU.Models
{
    public class Build
    {
        public int BuildId { get; set; }
        public string BuildName { get; set; }
        public string Address { get; set; }
        public string Floors { get; set; }
        public string? Other { get; set; }
    }
}
