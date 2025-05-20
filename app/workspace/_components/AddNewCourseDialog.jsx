import React, { use, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { Input } from "../../../@/components/ui/input";
import { Textarea } from "../../../@/components/ui/Textarea";
import { Switch } from "../../../@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../@/components/ui/select";
import { Button } from "../../../@/components/ui/button";
import { Loader2Icon, Sparkle } from "lucide-react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
function AddNewCourseDialog({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    no0fChapters: 1,
    includeVideo: false,
    level: "",
    catetgory: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log(formData );
  };

//   const onGenerateCourse = () => {
//     console.log(formData);
//   };

  const onGenerate = async () => {
     const courseId = uuidv4();
    console.log(formData , courseId);
   
    try {
      setIsLoading(true);
      const result = await axios.post("/api/generate-course-layout", {
        ...formData,
        courseId:courseId
      });
      console.log(result.data);
      router.push(`/workspace/edit-course/${courseId}`);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={"text-2xl font-bold text-center"}>
            Create New Course Using AI
          </DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-4 mt-3">
              <div className="flex flex-col gap-2">
                <label>Course Name</label>
                <Input
                  placeholder="Enter Course Name"
                  onChange={(event) =>
                    handleInputChange("name", event?.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Course Description</label>
                <Textarea
                  placeholder="Enter Course Description"
                  onChange={(event) =>
                    handleInputChange("description", event?.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>number of chapters</label>
                <Input
                  placeholder="Enter number of chapters"
                  onChange={(event) =>
                    handleInputChange("no0fChapters", event?.target.value)
                  }
                />
              </div>
              <div className="flex items-center gap-3">
                <label>include video</label>
                <Switch
                  checked={formData.includeVideo}
                  onCheckedChange={(checked) =>
                    handleInputChange("includeVideo", checked)
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Deficulty Level</label>
                <Select
                  onValueChange={(value) => handleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Deficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Category</label>
                <Input
                  placeholder="Enter Category(sperated by Comma)"
                  onChange={(event) =>
                    handleInputChange("catetgory", event?.target.value)
                  }
                />
              </div>

              <div className="mt-6">
                <Button
                  className="flex items-center w-full"
                  onClick={onGenerate}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <Sparkle className="mr-2" />
                  )}{" "}
                  Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default AddNewCourseDialog;
