import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SingleBlog.css';
import edible from '../assets/edible.jpg';
import biopharm from '../assets/biopharming.jpg';
import biotech from '../assets/biotech.jpg';
import drug from '../assets/drug.jpg';
import synthetic from '../assets/synthetic.jpg'
import genetic from '../assets/genetic.jpg';

const blogDetails = {
  1: {
    title: 'Edible Vaccines',
    author: 'Esoh Rene Tanwieh',
    image: edible,
    content: `Edible vaccines represent a groundbreaking innovation in biotechnology, combining immunology and genetic engineering to create vaccines that can be consumed as food. These vaccines are developed by introducing specific genes encoding antigens into plants, enabling them to express immune-triggering proteins. Once consumed, plant cells protect these antigens from degradation in the stomach. In the intestine, they are released and stimulate both mucosal and systemic immunity. This delivery method offers notable benefits — it is cost-effective, does not require refrigeration, avoids needles, and eliminates the need for trained medical personnel, making it especially useful in remote or underdeveloped areas.

    These vaccines have been successfully tested for diseases like cholera, hepatitis B, measles, rotavirus, and even COVID-19. Common carrier crops include bananas, tomatoes, potatoes, and rice. Beyond infectious diseases, edible vaccines also show potential in managing autoimmune disorders and cancer. However, challenges remain — ensuring consistent dosage is difficult due to natural plant variability, and heat during cooking may degrade antigen proteins. Moreover, the use of genetically modified organisms (GMOs) brings regulatory hurdles and ethical concerns that need to be addressed before widespread implementation.
    
    Despite these challenges, edible vaccines hold immense promise, particularly in improving access to immunization in low-income regions. With ongoing clinical trials and advances in biotechnology, they may revolutionize global healthcare delivery. If regulatory frameworks and technical barriers can be resolved, edible vaccines could transform how the world approaches disease prevention — delivering immunity through the very food we eat.`
    
  },
  2: {
    title: 'Top Careers in Biotechnology',
    author: 'BSL Research Team',
    image: biotech,
    content: `Biotechnology is a multidisciplinary field blending biology, chemistry, engineering, and data science to drive innovation in healthcare, agriculture, and the environment. With increasing global investment in biotech research, the demand for skilled professionals has surged. Key career paths include research scientists who work in labs on genetic engineering, molecular biology, and drug development; biomedical engineers who design medical devices or tissue scaffolds; and clinical researchers who manage trials for new therapies. These roles often require postgraduate qualifications but offer strong growth and impact potential.

    Outside the lab, biotechnology also offers exciting opportunities in regulatory affairs, quality assurance, and intellectual property law. Regulatory professionals ensure biotech products meet safety standards set by agencies like the FDA, while QA analysts monitor processes for consistency. Patent examiners and IP lawyers protect innovations through legal channels, often working with startups and global pharma companies. Additionally, sales and marketing roles in biotech firms require individuals with both scientific knowledge and strong communication skills to explain complex technologies to clients or investors.
    
    Emerging fields like bioinformatics, synthetic biology, and CRISPR genome editing have opened doors to newer career avenues. Bioinformaticians combine coding and biology to interpret massive datasets, aiding everything from drug discovery to personalized medicine. Synthetic biologists design new biological parts and organisms, revolutionizing how we make drugs or biofuels. With advancements in machine learning, the future of biotech careers will continue to expand, offering interdisciplinary roles that bridge science, business, and technology.`
    
  },
  3: {
    title: 'AI in Drug Discovery',
    author: 'BSL Editorial Board',
    image: drug,
    content: `Artificial Intelligence (AI) is rapidly transforming the drug discovery process, which traditionally takes years and costs billions. By analyzing vast datasets—from genetic sequences to clinical trial outcomes—AI can identify potential drug targets, predict molecule behavior, and even design new compounds in silico. Algorithms can quickly screen millions of chemical structures to find those most likely to succeed, significantly speeding up the early research phase. Machine learning models also help optimize lead compounds for efficacy and safety before they ever enter a lab.

    One of the most powerful uses of AI in pharma is in drug repurposing, where existing medications are analyzed for new therapeutic uses. This has proven especially useful during health emergencies like COVID-19. Companies like DeepMind, BenevolentAI, and Insilico Medicine have developed platforms that combine deep learning, natural language processing, and biology to streamline development pipelines. AI also plays a crucial role in predictive toxicology, helping avoid costly failures in later stages by identifying likely side effects early.
    
    Despite its potential, integrating AI into drug discovery comes with challenges. High-quality, diverse biomedical data is essential for accurate predictions, but data privacy, standardization, and access remain barriers. Regulatory bodies are also still defining how AI-assisted results can be validated and approved. Nevertheless, AI promises to cut costs, reduce failure rates, and democratize access to life-saving therapies. As the industry matures, professionals skilled in both data science and life sciences will be in high demand.`
    
  },
  4: {
    title: 'Biopharming',
    author: 'BSL Team',
    image: biopharm,
    content: `Biopharming, a subset of agricultural biotechnology, involves genetically engineering plants to produce therapeutic proteins, vaccines, and pharmaceuticals. The concept dates back to the 1980s with early successes like producing human growth hormone in tobacco. A milestone was achieved in 2012 when the FDA approved taliglucerase alfa, derived from carrot cells, marking the first plant-made pharmaceutical (PMP) approved for human use. Plants like tobacco, maize, and lettuce are commonly used due to their high biomass or suitability for oral delivery. Through stable or transient expression methods, genes are inserted into plant cells using Agrobacterium or gene gun techniques to generate the target proteins.

    Biopharming applications range from vaccines (e.g., ZMapp for Ebola, Medicago’s Covifenz for COVID-19) to therapeutic proteins like insulin and lactoferrin, and antibodies such as CaroRx. Compared to traditional mammalian cell culture systems, PMPs offer several advantages: lower production costs, greater scalability, safety from human pathogen contamination, and better storage (especially in the case of oral vaccines). However, the field is not without challenges. Technical hurdles like variable yields, purification issues, and potential allergenicity must be addressed. Regulatory concerns, biosafety risks such as gene escape into the environment, and public skepticism toward GMOs also present significant barriers to adoption.
    
    The future of biopharming is promising. CRISPR gene editing can enhance precision and protein output, while edible vaccines may improve accessibility in resource-poor settings. Nanotechnology is being explored to improve delivery mechanisms, and multifunctional plant therapeutics are on the horizon. Regulatory frameworks are gradually adapting, though global harmonization is needed, as highlighted by WHO’s hesitation to approve Covifenz due to its tobacco industry ties. In conclusion, biopharming has the potential to revolutionize pharmaceutical production and global health, provided safety, ethical, and technical concerns are responsibly managed.`
    
  },
  5: {
    title: 'Synthetic biology',
    author: 'BSL Team',
    image: synthetic,
    content: `Synthetic biology is an emerging field that combines biology, engineering, and computer science to design and construct new biological systems. Unlike traditional genetic modification, synthetic biology aims to build life from the ground up, creating organisms with tailored functions to address specific needs.

    In healthcare, synthetic biology is used to develop custom microbes that produce drugs, detect disease markers, or deliver therapeutic agents. In industrial applications, engineered bacteria and yeast synthesize valuable materials such as biofuels, biodegradable plastics, and food ingredients like vanilla or meat substitutes.
    
    A standout example is the development of synthetic biosensors—genetically programmed cells that detect toxins, pathogens, or environmental changes and respond accordingly. Synthetic biology also plays a role in biocontainment, where organisms are designed with built-in "kill switches" to prevent their uncontrolled spread.
    
    As with other biotechnologies, synthetic biology faces hurdles in bioethics, regulation, and public acceptance. Concerns include accidental release, dual-use risks (e.g., bioterrorism), and ecological impacts. However, with thoughtful oversight and innovation, synthetic biology holds the potential to reshape industries and offer sustainable solutions to global challenges.`
  },
  6: {
    title: 'Genetic Engineering in Medicine',
    author: 'BSL Team',
    image:genetic ,
    content: `Genetic engineering in medicine is revolutionizing how we approach disease prevention, diagnosis, and treatment. By directly altering the DNA of cells, scientists can now develop therapies that target the root causes of genetic disorders. CRISPR-Cas9, one of the most notable gene-editing tools, allows researchers to cut and modify DNA with unprecedented precision, opening new doors for personalized medicine.

One of the most exciting applications is gene therapy—replacing defective genes with healthy ones to treat diseases like cystic fibrosis, sickle cell anemia, and certain cancers. CAR-T cell therapy, a form of immunotherapy, uses genetically modified immune cells to recognize and destroy cancer cells more effectively. This form of treatment has shown remarkable success in patients with leukemia and lymphoma.

While genetic engineering offers immense promise, it also raises ethical, safety, and regulatory challenges. Germline editing—modifying genes in embryos—sparks debate about human enhancement and long-term consequences. Ensuring equitable access to gene-based therapies is another critical issue. Despite these concerns, the role of genetic engineering in medicine is only expected to grow, making it a pivotal part of modern biotechnology.`
  }
};

function SingleBlog() {
  const { id } = useParams();
  const blog = blogDetails[id];

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="single-blog">
      <div className="blog-header">
        <img src={blog.image} alt={blog.title} />
        <div className="blog-meta">
          <h1>{blog.title}</h1>
          <p><strong>By</strong> {blog.author}</p>
        </div>
      </div>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
      <Link to="/blogs" className="back-link">← Back to Blogs</Link>
    </div>
  );
}

export default SingleBlog;
