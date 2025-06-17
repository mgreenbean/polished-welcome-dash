
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ChevronRight } from "lucide-react";

const LegalTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Legal</h2>
        <p className="text-gray-600">Review terms, policies, and manage your account</p>
      </div>

      {/* Terms & Policies */}
      <Card>
        <CardHeader>
          <CardTitle>Terms & Policies</CardTitle>
          <p className="text-sm text-gray-600">Review our terms of service and privacy policies.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-3" />
              Terms of Service
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-3" />
              Privacy Policy
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-3" />
              Cookie Policy
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <p className="text-sm text-gray-600">Manage your account data and settings.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Download className="h-4 w-4 mr-3" />
            Download My Data
          </Button>
          
          <Button variant="destructive" className="w-full justify-start">
            <FileText className="h-4 w-4 mr-3" />
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalTab;
