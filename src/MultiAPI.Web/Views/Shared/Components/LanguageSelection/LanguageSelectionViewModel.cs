using System.Collections.Generic;
using Abp.Localization;

namespace MultiAPI.Web.Views.Shared.Components.LanguageSelection
{
    public class LanguageSelectionViewModel
    {
        public LanguageInfo CurrentLanguage { get; set; }

        public IReadOnlyList<LanguageInfo> Languages { get; set; }
    }
}