from django.core.management.base import BaseCommand
from teacher.models import Faculty  # Adjust the import based on your app name

class Command(BaseCommand):
    help = 'Populates the Faculty model with data from brac_data.txt'

    def handle(self, *args, **kwargs):
        # Path to the text file (adjust the path as needed)
        file_path = r'F:\foohyb\asif\test\Backend\rev\teacher\management\commands\brac_data.txt'
        try:
            with open(file_path, 'r') as file:
                lines = file.readlines()

            # Initialize variables
            name = designation = email = None
            department = "Computer Science and Engineering"  # Default department
            profile_picture_url = "https://via.placeholder.com/150"  # Placeholder image URL

            for line in lines:
                line = line.strip()

                # Update department if a new department is mentioned
                if line.startswith("Department of"):
                    department = line.split("Department of ")[1]

                # Extract email if the line contains an '@' symbol
                elif "@" in line:
                    email = line

                # Extract designation if the line ends with a known designation
                elif line.endswith(("Professor", "Lecturer", "Adjunct Lecturer", "Research Assistant",
                                    "Senior Lecturer", "Associate Professor", "Chairperson", "Dean")):
                    designation = line

                # Extract name if the line doesn't match other patterns
                elif line and not line.startswith(("Professors", "Associate Professors", "Assistant Professors",
                                                   "Senior Lecturers", "Lecturers", "Adjunct Lecturers",
                                                   "Research Assistants", "search Faculty")):
                    name = line

                # If all fields are populated, create a Faculty instance
                if name and designation and email:
                    Faculty.objects.create(
                        name=name,
                        profile_picture_url=profile_picture_url,
                        designation=designation,
                        department=department
                    )
                    self.stdout.write(self.style.SUCCESS(f"Added: {name} - {designation}"))
                    # Reset variables for the next entry
                    name = designation = email = None

        except FileNotFoundError:
            self.stdout.write(self.style.ERROR(f"File not found: {file_path}"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"An error occurred: {str(e)}"))