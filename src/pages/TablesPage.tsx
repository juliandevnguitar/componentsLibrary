import DataTableView from "@/components/ui/tables/DataTable"

export default function TablesPage() {
    return (
        <div className="w-full flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Tables</h1>
            <DataTableView />
        </div>
    )
}
