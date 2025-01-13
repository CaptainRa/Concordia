import { ScheduleForm } from "./Schedule";

export default function Scheduling() {
    return (
        <div className="flex w-full flex-col h-screen items-center text-white justify-center text-center">
            <div className="flex w-full flex-row items-center justify-center px-8 text-white mt-4 gap-2">

                <ScheduleForm/>
            </div>
        </div>
    )
}