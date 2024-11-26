'use client'

import { LogOut, ImageIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function TimeAllocationsView() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="p-4 bg-[#159C47] text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Time Allocations</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="text-white">
              <LogOut className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 space-y-4">
        {/* Top Section - Three Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* OT Details Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#159C47]">Detalles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-y-2">
                <Label className="w-24 m-auto" htmlFor="ot">
                  OT
                </Label>
                <Input id="ot" />
              </div>
              <div className="flex space-y-2">
                <Label className="w-24 m-auto" htmlFor="tipo">
                  Tipo
                </Label>
                <Input id="tipo" />
              </div>
              <div className="flex space-y-2">
                <Label className="w-24 m-auto" htmlFor="puesto">
                  Puesto
                </Label>
                <Input id="puesto" />
              </div>
              <div className="flex space-y-2">
                <Label className="w-24 m-auto" htmlFor="empleado">
                  Empleado
                </Label>
                <Input id="empleado" />
              </div>
              <div className="flex space-y-2">
                <Label className="w-24 m-auto" htmlFor="fecha">Fecha</Label>
                <Input id="fecha" type="date" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="inicio">Inicio</Label>
                  <Input id="inicio" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="final">Final</Label>
                  <Input id="final" type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="observaciones">Observaciones</Label>
                <Textarea id="observaciones" />
              </div>
            </CardContent>
          </Card>

          {/* Photo Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#159C47]">
                Photo of Selected OT
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-[400px] bg-muted/10">
              <ImageIcon className="h-20 w-20 text-muted-foreground/40" />
              <p className="text-muted-foreground mt-4">No photo available</p>
            </CardContent>
          </Card>

          {/* Additional Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#159C47]">
                Additional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mt-8">
                Additional information will be displayed here
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Filters and Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#159C47]">Tiempos</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="mb-4 p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Filtros</h3>
              <div className="grid grid-cols-4 gap-4">
                <Input placeholder="Filter by OT" />
                <Input placeholder="Filter by Employee" />
                <Input type="date" />
                <Button className="w-full">Aplicar filtros</Button>
              </div>
            </div>

            {/* Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>OT</TableHead>
                  <TableHead>Employee</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                  <TableHead>Total Hours</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Observations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>OT-001</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>2024-01-25</TableCell>
                  <TableCell>09:00</TableCell>
                  <TableCell>17:00</TableCell>
                  <TableCell>8.0</TableCell>
                  <TableCell>Regular</TableCell>
                  <TableCell>Initial setup completed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>OT-002</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>2024-01-26</TableCell>
                  <TableCell>08:30</TableCell>
                  <TableCell>16:30</TableCell>
                  <TableCell>8.0</TableCell>
                  <TableCell>Overtime</TableCell>
                  <TableCell>Emergency repair</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-[#363839] text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 OT Management System</p>
        </div>
      </footer>
    </div>
  )
}
