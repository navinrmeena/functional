import React, { useState, useEffect } from "react";
import { ScrollView, YStack, XStack, Stack } from "tamagui";
import { Feather } from "@expo/vector-icons";
import Text from "./Text";
import { getColor } from "../constants/Constants";
import areEqual from "../utils/MemoFunction";
import { StudentLg } from "./StudentLg";
import { StudentTableHeader } from "./StudentTableHeader";
import { splitArr } from "../constants/Constants";
import Divider from "./atoms/Divider";
import PaginationButtons from "./molecules/PaginationButtons";
import Input from "./atoms/Input";

const  students = [
  {
    StudentId: "1a2b3c4d-5678-90ef-abcd-1234567890ef",
    Name: "Aarav Sharma",
    Class: "10",
    Grade: "A",
    Age: 15,
    Gender: "Male",
    RollNumber: "101",
    Marks: 88,
    Attendance: "92%",
    Email: "aarav.sharma@example.com",
    Phone: "9876543210",
    Address: "123 Green Street, New Delhi, India",
    Section: "A",
    GuardianName: "Raj Sharma",
    EnrollmentDate: "2020-06-15",
    Status: "Active",
  },
  {
    StudentId: "2b3c4d5e-6789-01fa-bcde-2345678901fa",
    Name: "Ishita Gupta",
    Class: "9",
    Grade: "A+",
    Age: 14,
    Gender: "Female",
    RollNumber: "102",
    Marks: 92,
    Attendance: "95%",
    Email: "ishita.gupta@example.com",
    Phone: "9876543211",
    Address: "456 Blue Avenue, Mumbai, India",
    Section: "B",
    GuardianName: "Meera Gupta",
    EnrollmentDate: "2019-05-20",
    Status: "Active",
  },
  {
    StudentId: "3c4d5e6f-7890-12fb-cdef-3456789012fb",
    Name: "Vihaan Verma",
    Class: "11",
    Grade: "B",
    Age: 16,
    Gender: "Male",
    RollNumber: "103",
    Marks: 76,
    Attendance: "89%",
    Email: "vihaan.verma@example.com",
    Phone: "9876543212",
    Address: "789 Yellow Lane, Bangalore, India",
    Section: "C",
    GuardianName: "Anil Verma",
    EnrollmentDate: "2021-08-10",
    Status: "Active",
  },
  {
    StudentId: "4d5e6f7g-8901-23fc-def0-4567890123fc",
    Name: "Ananya Desai",
    Class: "12",
    Grade: "A",
    Age: 17,
    Gender: "Female",
    RollNumber: "104",
    Marks: 89,
    Attendance: "94%",
    Email: "ananya.desai@example.com",
    Phone: "9876543213",
    Address: "101 Orange Road, Pune, India",
    Section: "D",
    GuardianName: "Suresh Desai",
    EnrollmentDate: "2018-03-12",
    Status: "Active",
  },
  {
    StudentId: "5e6f7g8h-9012-34fd-ef01-5678901234fd",
    Name: "Arjun Reddy",
    Class: "10",
    Grade: "B+",
    Age: 15,
    Gender: "Male",
    RollNumber: "105",
    Marks: 84,
    Attendance: "88%",
    Email: "arjun.reddy@example.com",
    Phone: "9876543214",
    Address: "234 White Boulevard, Hyderabad, India",
    Section: "A",
    GuardianName: "Ravi Reddy",
    EnrollmentDate: "2020-07-05",
    Status: "Active",
  },
  {
    StudentId: "6f7g8h9i-0123-45fe-f012-6789012345fe",
    Name: "Meera Iyer",
    Class: "9",
    Grade: "A+",
    Age: 14,
    Gender: "Female",
    RollNumber: "106",
    Marks: 91,
    Attendance: "93%",
    Email: "meera.iyer@example.com",
    Phone: "9876543215",
    Address: "567 Purple Crescent, Chennai, India",
    Section: "B",
    GuardianName: "Radha Iyer",
    EnrollmentDate: "2019-04-16",
    Status: "Active",
  },
  {
    StudentId: "7g8h9i0j-1234-56ef-0123-7890123456ef",
    Name: "Kabir Singh",
    Class: "11",
    Grade: "C",
    Age: 16,
    Gender: "Male",
    RollNumber: "107",
    Marks: 73,
    Attendance: "85%",
    Email: "kabir.singh@example.com",
    Phone: "9876543216",
    Address: "890 Brown Square, Jaipur, India",
    Section: "C",
    GuardianName: "Vikram Singh",
    EnrollmentDate: "2021-09-18",
    Status: "Active",
  },
  {
    StudentId: "8h9i0j1k-2345-67f0-1234-8901234567f0",
    Name: "Sara Khan",
    Class: "12",
    Grade: "A+",
    Age: 17,
    Gender: "Female",
    RollNumber: "108",
    Marks: 94,
    Attendance: "97%",
    Email: "sara.khan@example.com",
    Phone: "9876543217",
    Address: "345 Silver Parkway, Kolkata, India",
    Section: "D",
    GuardianName: "Amir Khan",
    EnrollmentDate: "2018-02-23",
    Status: "Active",
  },
];


export const StudentTableList = React.memo(() => {
  const [sortedColumn, setSortedColumn] = useState({
    name: "Marks",
    order: "DSC",
  });
  const [sortedStudents, setSortedStudents] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (students.length === 0) return;

    let sortedList = students.map((student: any) => {
      return {
        ...student,
        id:
          student.FirstName || student.LastName
            ? `${student.FirstName} ${student.LastName}`.trim()
            : student.StudentId,
      };
    });

    sortedList = sortedList.sort((a: any, b: any) => {
      if (sortedColumn.name === "id")
        return sortedColumn.order === "ASC"
          ? a.id.localeCompare(b.id)
          : b.id.localeCompare(a.id);
      return sortedColumn.order === "ASC"
        ? a[sortedColumn.name] - b[sortedColumn.name]
        : b[sortedColumn.name] - a[sortedColumn.name];
    });

    const splitData = splitArr(sortedList, 50);
    setSortedStudents([...splitData]);
  }, [students, JSON.stringify(sortedColumn)]);

  const handleSearch = () => {
    const trimmedSearchValue = searchValue.trim();
    if (trimmedSearchValue.length === 0) return;

    const searchLower = trimmedSearchValue.toLowerCase();

    let filteredData = students.filter((student: any) => {
      return (
        (student.StudentId &&
          typeof student.StudentId === "string" &&
          student.StudentId.toLowerCase().includes(searchLower)) ||
        (student.FirstName &&
          typeof student.FirstName === "string" &&
          student.FirstName.toLowerCase().includes(searchLower)) ||
        (student.LastName &&
          typeof student.LastName === "string" &&
          student.LastName.toLowerCase().includes(searchLower)) ||
        (student.Phone &&
          typeof student.Phone === "string" &&
          student.Phone.toLowerCase().includes(searchLower)) ||
        (student.Email &&
          typeof student.Email === "string" &&
          student.Email.toLowerCase().includes(searchLower))
      );
    });

    let sortedList = filteredData.map((student: any) => {
      return {
        ...student,
        id:
          student.FirstName || student.LastName
            ? `${student.FirstName} ${student.LastName}`.trim()
            : student.StudentId,
      };
    });

    sortedList = sortedList.sort((a: any, b: any) => {
      if (sortedColumn.name === "id") {
        return sortedColumn.order === "ASC"
          ? a.id.localeCompare(b.id)
          : b.id.localeCompare(a.id);
      }
      const aValue = a[sortedColumn.name] || 0;
      const bValue = b[sortedColumn.name] || 0;
      return sortedColumn.order === "ASC" ? aValue - bValue : bValue - aValue;
    });

    const splitData = splitArr(sortedList, 50);
    setSortedStudents([...splitData]);
  };

  return (
    <YStack gap="$3.5">
      <YStack>
        <XStack>
          <Input
            width="$212"
            height="$40"
            borderRadius={0}
            borderWidth={0.5}
            onSubmitEditing={handleSearch}
            placeholder="Search Students..."
            autoCapitalize="none"
            onChangeText={(value: any) => setSearchValue(value)}
            borderColor={"$surfaceBorderLight"}
          />
          <Stack
            width="$40"
            bg="$iconBrandPrimary"
            justifyContent="center"
            cur="pointer"
            onPress={handleSearch}
          >
            <Feather
              name="search"
              style={{ alignSelf: "center" }}
              size={24}
              color="white"
            />
          </Stack>
        </XStack>
        <Text notchChange={-2}>
          Criteria:
          <Text
            notchChange={-2}
            fontWeight="$semiBold"
            color="$iconBrandSecondary"
          >
            {" Student ID, Phone, or Email"}
          </Text>
        </Text>
      </YStack>
      <ScrollView horizontal contentContainerStyle={{ flex: 1 }} flex={1}>
        <YStack flex={1} minWidth={1100} gap="$1.5">
          <StudentTableHeader
            sortedColumn={sortedColumn}
            setSortedColumn={setSortedColumn}
          />
          <Divider />
          {sortedStudents.length > 0 &&
            sortedStudents[currentPage].map((student: any) => (
              <StudentLg key={student.id} student={student} />
            ))}
        </YStack>
      </ScrollView>
      {sortedStudents.length > 1 && (
        <PaginationButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          length={sortedStudents.length}
        />
      )}
    </YStack>
  );
}, areEqual);
