## Review of Unix Commands

- `mkdir toast` - make a new folder called toast in the current directory (when you open Terminal, you usually start out in the Home directory, which is /Users/yourname or "~"). So if you open terminal and run this command the location of the new folder will be /Users/yourname/toast

- `pwd` - print out the current directory you are in

- `cd toast` and `cd ..` - change directory (move) into the folder named toast, and go back to the previous directory, respectively

- `ls` and `ls -la` - list of the files in the current directory

- `touch toast.txt` - create a new file named "toast.txt"

- `rm toast.txt` - remove (delete) the file named toast.txt, if it exists in the current directory

- `mv "file1" "/some/other/directory"` - Move a file (named "file1" in this example) to /some/other/directory. For example, `mv toast /Users/david` or `mv toast ~` will move the file "toast" to my home directory (/Users/david).

- `cp "file1" "/some/other/directory"` - Copy. Works exactly the same as `mv`, but it leaves the original file in place.

- `cat some-text-file` - Read some-text-file and print it in the terminal. For example, `cat ~/.bash_profile` will show you the contents of your .bash_profile in the terminal

Challenge: (Mac only) on your own, can you learn what the `curl` command does?
