using System;
using System.IO;
using System.Linq;

namespace MultiAPI.Web
{
    /// <summary>
    /// This class is used to find root path of the web project in;
    /// unit tests (to find views) and entity framework core command line commands (to find conn string).
    /// </summary>
    public static class WebContentDirectoryFinder
    {
        public static string CalculateContentRootFolder()
        {
            var coreAssemblyDirectoryPath = Path.GetDirectoryName(typeof(MultiAPICoreModule).Assembly.Location);
            if (coreAssemblyDirectoryPath == null)
            {
                throw new ApplicationException("Could not find location of MultiAPI.Core assembly!");
            }

            var directoryInfo = new DirectoryInfo(coreAssemblyDirectoryPath);
            while (!DirectoryContains(directoryInfo.FullName, "MultiAPI.sln"))
            {
                if (directoryInfo.Parent == null)
                {
                    throw new ApplicationException("Could not find content root folder!");
                }

                directoryInfo = directoryInfo.Parent;
            }

            return Path.Combine(directoryInfo.FullName, @"src\MultiAPI.Web");
        }

        private static bool DirectoryContains(string directory, string fileName)
        {
            return Directory.GetFiles(directory).Any(filePath => string.Equals(Path.GetFileName(filePath), fileName));
        }
    }
}
