# MMA-Tools

This is a small collection of tools that I have made for my work at MMA.

This is not made to be a fancy looking website (at this time), but is to be functional.

The home/index page is literally a simple index with links to the tools. (currently only two tools)

The first tool is a small collection of useful calculators. Currently, there are only two calculators. 
-There is a coverage calculator, to quickly calculate new home insurance coverages based on changing the dwelling coverage. A home insurance policy provides 
other structures, personal property, and loss of use coverage based on a percentage of the dwelling coverage. All carriers have different percentages, and each 
individual policy can have different percentages. Oftentimes, when quoting a change to the dwelling, the carrier will not automatically adjust the separate 
coverages, and requires user adjustment. Given the current coverages, and the desired new dwelling coverage, the tool will calculate the adjusted separate coverages.
-The other tool is a simple premium increase percent calculator. Provided the current premium, and the renewal offer premium, the tool will calculate the premium increase
percent.
-A third tool will be added, which will be prorated/annualized premium calculator. Given the policy effective dates, and the effective date of an endorsement, the tool
will calculate the prorated estimate into an annualized estimate, or convert an annualized estimate into a prorated estimate. (I prefer to provide my clients with both
figures. Many carriers only provide either the prorated or the annualized estimate only.


The second tool is to aid with quickly accessing billing information for insurance policies. At present time, it only functions with one carrier, 
based on a direct url, with the policy number appended to the end. Other carriers will require either API access, or development of an extension to get 
around browser not allowing running JavaScript on a different page. (Due to security settings on my work computer, it is not possible to disable this chrome limitation).
