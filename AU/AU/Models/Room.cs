using System.ComponentModel.DataAnnotations;

namespace AU.Models
{
    public class Room
    {
        public int RoomId { get; set; }
        public int BuildId { get; set; }
        public Build? Build { get; set; }
        public string? RoomName { get; set; }
        public int RoomTypeId { get; set; }
        public RoomType? RoomType { get; set; }
        public string Capacity { get; set; }
        public string Floor { get; set; }
        public string RoomNumber { get; set; }
    }
}
