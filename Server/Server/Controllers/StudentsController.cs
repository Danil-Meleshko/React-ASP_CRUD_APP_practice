using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public StudentsController(ApplicationDBContext dBContext) {
            _dbContext = dBContext;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetAll()
        {
            if (_dbContext.Students == null)
            {
                return NotFound();
            }
            return await _dbContext.Students.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(string id)
        {
            var student = await _dbContext.Students.FirstOrDefaultAsync(x => x.Id == id);
            if (student == null) {
                return NotFound();
            }
            return student;
        }

        [HttpPost]
        public async Task<ActionResult<Student>> AddStudent(Student student)
        {
            if (student == null)
            {
                return BadRequest();
            }

            await _dbContext.Students.AddAsync(student);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            var student = _dbContext.Students.FirstOrDefault(x => x.Id == id);
            if (student == null)
            {
                return NotFound();
            }

            _dbContext.Students.Remove(student);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditStudent(string id, Student student)
        {
            if(id == null || student == null)
            {
                return BadRequest();
            }

            var EditedStudent = await _dbContext.Students.FindAsync(id);
            if (EditedStudent == null)
            {
                return NotFound();
            }

            EditedStudent.Name = student.Name;
            EditedStudent.Description = student.Description;
            EditedStudent.IsActive = student.IsActive;

            _dbContext.Students.Update(EditedStudent);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
