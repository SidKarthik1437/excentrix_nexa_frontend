import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

function Students({ students, onUserSelect }) {
  console.log(students);
  const { departments } = useContext(DataContext);

  return departments.map((department) => (
    <Accordion type="single" collapsible>
      <AccordionItem value={department.name}>
        <AccordionTrigger className="flex w-full justify-between text-sm">
          <span className="text-left w-full">{department.name}</span>
          <span className="">
            <Badge>
              {
                students.filter(
                  (student) => student.department.name === department.name
                ).length
              }
            </Badge>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          {students
            .filter((student) => student.department.name === department.name)
            .map((student) => (
              <Button
                key={student.id}
                className="text-sm"
                onClick={() => onUserSelect(student)}
              >
                {student.name} - {student.usn}
              </Button>
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));
}

export default Students;
