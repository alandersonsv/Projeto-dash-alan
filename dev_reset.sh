#!/bin/bash
#
# dev_reset.sh: A comprehensive script to clear the Vite cache and start the development server.
#
# This script automates the process of:
# 1. Changing the current directory to the project root.
# 2. Robustly removing the `.vite` directory within `node_modules`.
# 3. Executing the `npm run dev` command to start the development server.
# 4. Handling errors and providing informative messages.
#
# Exit codes:
# 0: Success
# 1: Error occurred

# Set -e to exit immediately if a command exits with a non-zero status.
set -e

# --- Step 1: Change to the project root directory ---
echo "Changing directory to the project root..."
PROJECT_ROOT=$(dirname "$0") # Get the directory of the script
cd "$PROJECT_ROOT" || {
  echo "Error: Could not change directory to project root." >&2
  exit 1
}
echo "Successfully changed directory to: $(pwd)"

# --- Step 2: Robustly remove the .vite directory ---
echo "Removing the .vite directory..."
VITE_DIR="./node_modules/.vite"

if [ -d "$VITE_DIR" ]; then
  echo "The .vite directory exists. Attempting to remove it..."
  rm -rf "$VITE_DIR"
  if [ $? -eq 0 ]; then
    echo "Successfully removed the .vite directory."
  else
    echo "Error: Could not remove the .vite directory. Check permissions or if the directory is in use." >&2
    exit 1
  fi
else
  echo "The .vite directory does not exist. Skipping removal."
fi

# --- Step 3: Execute the npm run dev command ---
echo "Starting the development server using npm run dev..."
npm run dev
if [ $? -eq 0 ]; then
  echo "The development server has started successfully."
else
  echo "Error: Failed to start the development server." >&2
  exit 1
fi

# --- Script completed successfully ---
echo "Vite cache cleared and development server started successfully."
exit 0
