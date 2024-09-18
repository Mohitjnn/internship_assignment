import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/10 text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="mb-4">
            Enter your email and subscribe to receive notifications of new posts
            by email.
          </p>
          <div className="flex max-w-md mx-auto">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="pl-10 bg-white text-black"
              />
            </div>
            <Button className="ml-2 bg-orange-500 hover:bg-orange-700">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-t border-navy-800 pt-8">
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <p>ITC 3, Sector 67,</p>
            <p>Sahibzada Ajit Singh</p>
            <p>Nagar, Punjab 160062</p>
            <p>sales@fatbit.com</p>
            <p>+916284314570</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
              <Youtube size={20} />
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Apply to Teach</li>
              <li>Video Content</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>Become An Affiliate</li>
              <li>Blog</li>
              <li>Blog Contribution</li>
              <li>Find Teachers</li>
              <li>Privacy And Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Language & Currency</h3>
            <Select className="mb-2 bg-navy-800">
              <option>English</option>
            </Select>
            <Select className="bg-navy-800">
              <option>USD</option>
            </Select>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Yo!Coach</p>
          <p>Developed by FATbit Technologies</p>
        </div>
      </div>
    </footer>
  );
}
