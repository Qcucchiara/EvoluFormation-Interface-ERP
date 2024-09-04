import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type Contact = {
  id: number;
  name: string;
  email: string;
  tel: string;
};
type Student = {
  id: number;
  name: string;
  email: string;
  tel: string;
};

export const FormCompany = () => {
  const [siret, setSiret] = useState(["", "", "", ""]);
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "John Doe", email: "john@example.com", tel: "0123456789" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", tel: "9876543210" },
  ]);
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "John Doe", email: "john@example.com", tel: "0123456789" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", tel: "9876543210" },
  ]);
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);

  const handleSiretChange = (index: number, value: string) => {
    const newSiret = [...siret];
    newSiret[index] = value;
    setSiret(newSiret);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleContactSelect = (contactId: string) => {
    const contact = contacts.find((c) => c.id === parseInt(contactId));
    if (contact && !selectedContacts.some((c) => c.id === contact.id)) {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };
  const handleStudentSelect = (studentId: string) => {
    const student = students.find((c) => c.id === parseInt(studentId));
    if (student && !selectedStudents.some((c) => c.id === student.id)) {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleRemoveContact = (contactId: number) => {
    setSelectedContacts(selectedContacts.filter((c) => c.id !== contactId));
  };
  const handleRemoveStudent = (studentId: number) => {
    setSelectedStudents(selectedStudents.filter((c) => c.id !== studentId));
  };

  const handleAddNewContact = () => {
    const newContact: Contact = {
      id: contacts.length + 1,
      name: "Nouveau Contact",
      email: "nouveau@example.com",
      tel: "0000000000",
    };
    setContacts([...contacts, newContact]);
    setSelectedContacts([...selectedContacts, newContact]);
  };
  const handleAddNewStudent = () => {
    const newStudent: Student = {
      id: students.length + 1,
      name: "Nouvel Elève",
      email: "nouveau@example.com",
      tel: "0000000000",
    };
    setStudents([...students, newStudent]);
    setSelectedStudents([...selectedStudents, newStudent]);
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Formulaire d'Entreprise</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="enterprise" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="enterprise">Entreprise</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="students">Elèves</TabsTrigger>
          </TabsList>
          <TabsContent value="enterprise">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom de l'entreprise</Label>
                <Input
                  id="name"
                  placeholder="Entrez le nom de l'entreprise"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="siret">Numéro SIRET</Label>
                <div className="flex space-x-2">
                  <InputOTP maxLength={14}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={6} />
                      <InputOTPSlot index={7} />
                      <InputOTPSlot index={8} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={9} />
                      <InputOTPSlot index={10} />
                      <InputOTPSlot index={11} />
                      <InputOTPSlot index={12} />
                      <InputOTPSlot index={13} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Adresse</h3>
                <div className="space-y-2">
                  <Label htmlFor="street">N° et Nom de rue</Label>
                  <Input
                    id="street"
                    placeholder="Entrez le numéro et le nom de la rue"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Code postal</Label>
                    <Input id="postalCode" placeholder="Code postal" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input id="city" placeholder="Ville" required />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Soumettre
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="contacts">
            <div className="space-y-6">
              <div className="flex space-x-4">
                <Select onValueChange={handleContactSelect}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sélectionner un contact" />
                  </SelectTrigger>
                  <SelectContent>
                    {contacts.map((contact) => (
                      <SelectItem
                        key={contact.id}
                        value={contact.id.toString()}
                      >
                        {contact.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={handleAddNewContact}>Nouveau Contact</Button>
              </div>
              <div className="space-y-4">
                {selectedContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-4 border rounded-md"
                  >
                    <div>
                      <p className="font-semibold">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {contact.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.tel}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveContact(contact.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="students">
            <div className="space-y-6">
              <div className="flex space-x-4">
                <Select onValueChange={handleStudentSelect}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sélectionner un élève" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem
                        key={student.id}
                        value={student.id.toString()}
                      >
                        {student.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={handleAddNewStudent}>Nouvel Elève</Button>
              </div>
              <div className="space-y-4">
                {selectedStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 border rounded-md"
                  >
                    <div>
                      <p className="font-semibold">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {student.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {student.tel}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveStudent(student.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
